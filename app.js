const express = require('express');
const session= require("express-session");
const cookies = require("cookie-parser");
const app = express();
const path = require('path');
const aplicationMiddleware = require("./middleware/aplicationMiddleware");
const sessionActiva = require("./middleware/sessionActiva");


const PUERTO=3002;

app.set('view engine', 'ejs'); /* para utilizar plantillas ejs   */

const methodOverride = require("method-override");/** para utilizar put y delete***** */
app.use(methodOverride("_method")); /** para utilizar put y delete***** */

app.use(express.urlencoded({ extended: false })); /***pasa salvar los productos en el objeto ***/

app.listen(PUERTO,()=>{
    console.log("Aplicacion corriendo en puerto "+PUERTO);
});


app.use(express.static(path.join(__dirname, 'public')));
//se agrega configuracion session
app.use(session({
    secret: "mensaje secreto", 
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(aplicationMiddleware);
app.use(sessionActiva);

const rutaMain= require("./rutas/rutaMain");
app.use("/",rutaMain);

const rutaUser= require("./rutas/rutaUser");
app.use("/user",rutaUser);

const rutaCarrito= require("./rutas/rutaCarrito");
app.use("/ventas",rutaCarrito);

const rutaProductos= require("./rutas/rutaProductos");
const { cookie } = require('express-validator');

app.use("/productos",rutaProductos);