const express = require('express');

const router= express.Router();
const productoController= require("../controller/productoController");

router.get("/productoDetalle",productoController.productoDetalle);
router.get("/listadoProducto",productoController.listadoProducto);

module.exports=router;