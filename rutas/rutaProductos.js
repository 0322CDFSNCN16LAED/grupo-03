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

/*crear un producto*/ 
router.get('/create', productoController.create); 
//router.post('/guardar', productoController.store); 
router.post('/guardar', fileUpload.single('image'),  productoController.store);

/*obtener un solo producto*/
router.get('/:id', productoController.detail);
 
/*obtener productos por categoria*/
router.get('/by-category/:category', productoController.category);

/*editar, actualizar y eliminar un producto*/ 
router.get("/edit/:id", productoController.edit);
router.put("/update/:id", productoController.update);
router.delete("/delete/:id", productoController.destroy);

module.exports=router;