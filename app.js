const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs'); /* para utilizar plantillas ejs   */


app.use(express.urlencoded({ extended: false }));
const PUERTO=3000;

app.listen(PUERTO,()=>{
    console.log("Aplicacion corriendo en puerto "+PUERTO);
});


app.use(express.static(path.join(__dirname,'public')));

const rutaMain= require("./rutas/rutaMain");
app.use("/",rutaMain);

const rutaUser= require("./rutas/rutaUser");
app.use("/user",rutaUser);

const rutaCarrito= require("./rutas/rutaCarrito");
app.use("/ventas",rutaCarrito);

const rutaProductos= require("./rutas/rutaProductos");
app.use("/productos",rutaProductos);