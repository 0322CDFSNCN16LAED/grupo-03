const express = require('express');

const router= express.Router();
const productoController= require("../controller/productoController");

/*** GET ALL PRODUCTS ***/ 
router.get('/', productoController.index); 

/*** edit  PRODUCTS ***/ 
router.get('/create', productoController.create); 


/************para obtener un solo producto***********************/
router.get('/:id', productoController.detail); 

/************para obtener productos or categoria***********************/
router.get('/by-category/:category', productoController.category); 

module.exports=router;