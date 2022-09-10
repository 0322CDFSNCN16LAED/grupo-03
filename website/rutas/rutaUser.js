const express = require('express');
const router= express.Router();
const multer = require("multer");
const path = require('path');
const userController= require("../controller/userController");
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const controlerApi= require("../controller/api/userController");

const {body}= require("express-validator");
const { threadId } = require('worker_threads');
const { read } = require('fs');

const validationFormularioRegistro= [
    body("name").notEmpty().withMessage('Debe ingresar el nombre del usuario'),
    body("user").notEmpty().withMessage('Debe ingresar el usuario'),
    body("email").isEmail().withMessage('Debe ingresar un email valido'),
    body("password").isLength({min: 8}).withMessage('Debes ingresar un password de 8 digitos'),
    body("image").custom((value, { req }) => {
        const file = req.file;
        const acceptedExtensions = [".gif", ".png", ".jpeg", ".jpg"];
        //console.log(file);
        if (!file) {
          throw new Error("Tenes que subir una imagen de perfil");
        } else {
          const fileExtension = path.extname(file.filename);
          
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(
              `Las extensiones de archivo permitidas son: ${acceptedExtensions.join(
                ", "
              )}`
            );
          }
        }
        return true;
      }),
    body("confirmar").custom((value, extra) => {
        if (value !== extra.req.body.password) {
            throw new Error("La Contraseña no coincide; por favor intentar de nuevo");
        }
        return true;
    })
];

const validationFormularioIngreso= [    
    body("email").isEmail().withMessage('Debe ingresar un email valido'),
    body("password").isLength({min: 8}).withMessage('Debes ingresar un password de 8 digitos')    
];


/***************para carga de archivo**************************/
let multerDiskStorage= multer.diskStorage({
    destination:(req, file, cb)=>{        
        cb(null, path.join(__dirname, '../public/imagenes'));
    },
    filename: (req,file,cb)=>{
        const newImagen= Date.now() + path.extname(file.originalname);
        cb(null, newImagen);
    }
});

const fileUpload= multer({storage: multerDiskStorage});
/******************************************************************/

/*registrar un usuario*/ 
router.get('/register', guestMiddleware, userController.register);
router.post('/register', fileUpload.single('image'), validationFormularioRegistro, userController.store);

router.get("/login", guestMiddleware, userController.login);
router.post("/login", validationFormularioIngreso, userController.ingreso);

router.get("/perfil",authMiddleware, userController.perfil);
router.get("/logout", userController.logout);

/*****************APIS******************************/
router.get("/api/detail/:id", controlerApi.detail);
router.get("/api/list", controlerApi.list);
router.get("/api/email/:email", controlerApi.email);
router.get("/api/imagen/:imagen", controlerApi.picture);

module.exports=router;

