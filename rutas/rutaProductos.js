const express = require('express');

const router= express.Router();
const multer= require('multer');/***********subir archivos */
const path = require('path'); 
const productoController= require("../controller/productoController");

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
router.post('/guardar', fileUpload.single('image'),  productoController.store);

/*obtener un solo producto*/
router.get('/:id', productoController.detail);
router.get('/consult/:id', productoController.consult);
 
/*obtener productos por categoria*/
router.get('/by-category/:id', productoController.category);

/*editar, actualizar y eliminar un producto*/ 
router.get("/edit/:id", productoController.edit);
router.put("/update/:id", fileUpload.single('image'), productoController.update);
router.delete("/delete/:id", productoController.destroy);

module.exports=router;