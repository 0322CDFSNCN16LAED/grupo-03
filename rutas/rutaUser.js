const express = require('express');

const router= express.Router();
const multer = require("multer");
const path = require('path');
const userController= require("../controller/userController");
const registerValidation = require("../middlewares/validarContrasena");
const {body}= require("express-validator");

const validationFormulario= [
    body("name").notEmpty().withMessage('Debe ingresar el nombre del usuario'),
    body("user").notEmpty().withMessage('Debe ingresar el usuario'),
    body("mail").isEmail().withMessage('Debe ingresar un email valido'),
    body("contrasena").isLength(10).withMessage('Debes ingresar una contraseña de 10 digitos')    
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
router.get('/register', userController.register); 

router.post('/register', validationFormulario, fileUpload.single('image'),  userController.store);

router.get("/login",userController.login);

/*obtener un solo usuario*/
//router.get('/:id', userController.detail);
 
/*editar, actualizar y eliminar un usuario*/ 
//router.get("/edit/:id", userController.edit);
//router.put("/update/:id", fileUpload.single('image'), userController.update);
//router.delete("/delete/:id", userController.destroy);



module.exports=router;