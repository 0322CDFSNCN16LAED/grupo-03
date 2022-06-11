const express = require('express');

const router= express.Router();
const productoController= require("../controller/productoController");

router.get("/productoDetalle",productoController.productoDetalle);
router.get("/listadoProducto",productoController.listadoProducto);

/************para obtener un solo producto***********************/
router.get('/detalle/:id/', productoController.detail); 

module.exports=router;