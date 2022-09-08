const express = require('express');

const router= express.Router();
const multer= require('multer');/***********subir archivos */
const path = require('path'); 
const productoController= require("../controller/productoController");
const productoControlerApi= require("../controller/api/productoController");

const { body }= require("express-validator");

const validationFormProductoCreate= [
    body("name").notEmpty().isLength({min: 5}).withMessage('Se necesita nombre par poder subir producto'),
    body("precio").notEmpty().isNumeric({Min: 1}).withMessage("Se necesita precio para subir producto"),
    body('descripcion').notEmpty().isLength({min: 20}).withMessage("Se necesita descripcion para poder subir producto"),
    body("image").custom((value, { req }) => {
      const file = req.file;
      const acceptedExtensions = [".gif", ".png", ".jpeg", ".jpg"];
      console.log(file);
      if (!file) {
        throw new Error("Tenes que subir una imagen de perfil");
      } else {
        const fileExtension = path.extname(file.originalname);
        
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
]

const validationFormProductoEdit= [
    body("name").notEmpty().isLength({min: 5}).withMessage('Se necesita nombre par poder editar y subir producto'),
    body("precio").notEmpty().isNumeric({min: 1}).withMessage("Se necesita precio para editar y subir producto"),
    body('descripcion').notEmpty().isLength({min: 20}).withMessage("Se necesita descripcion para poder editar y subir producto"),
    body("image").custom((value, { req }) => {
      const file = req.file;
      const acceptedExtensions = [".gif", ".png", ".jpeg", ".jpg"];
      console.log(file);
      if (!file) {
        throw new Error("Tenes que subir una imagen de perfil");
      } else {
        const tipomeme = ".mp4";
        
        if(!acceptedExtensions.include(tipomeme)){
          throw new Error(
            `Las extensiones de archivo permitidas son: ${acceptedExtensions.join(
              ", "
            )}`
          );
        }

        

        
        
        const fileExtension = path.extname(file.originalname);
        
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
]

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

/*obtener todos los productos*/ 
router.get('/', productoController.index); 

/*************buscar un producto******************/
router.get("/search", productoController.search);

/*crear un producto*/ 
router.get('/create', productoController.create); 
router.post('/guardar', fileUpload.single('image'), validationFormProductoCreate, productoController.store);

/*obtener un solo producto*/
router.get('/:id', productoController.detail);
router.get('/consult/:id', productoController.consult);
 
/*obtener productos por categoria*/
router.get('/by-category/:id', productoController.category);

/*editar, actualizar y eliminar un producto*/ 
router.get("/edit/:id", productoController.edit);
router.put("/update/:id", fileUpload.single('image'), validationFormProductoEdit, productoController.update);
router.delete("/delete/:id", productoController.destroy);

/*******************APIS***********************/
router.get("/api/list", productoControlerApi.list);
router.get("/api/detail/:id", productoControlerApi.detail);
router.get("/api/category/:categoria_id", productoControlerApi.category);

module.exports=router;