const express = require('express');

const router= express.Router();
const productoController= require("../controller/productoController");

/*obtener todos los productos*/ 
router.get('/', productoController.index); 

/*crear un producto*/ 
router.get('/create', productoController.create); 


/*obtener un solo producto*/
router.get('/:id', productoController.detail); 

/*obtener productos por categoria*/
router.get('/by-category/:category', productoController.category); 

module.exports=router;