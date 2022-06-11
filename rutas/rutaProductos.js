const express = require('express');

const router= express.Router();
const productoController= require("../controller/productoController");

/*** GET ALL PRODUCTS ***/ 
router.get('/', productoController.index); 

/************para obtener un solo producto***********************/
router.get('/:id', productoController.detail); 

module.exports=router;