const express = require('express');

const router= express.Router();
const carritoController= require("../controller/carritoController");

router.get("/carrito",carritoController.carrito);
router.get("/datostarjeta",carritoController.datosTarjeta);

module.exports=router;