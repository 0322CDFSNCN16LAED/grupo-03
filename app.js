const express = require('express');
const app = express();
const path = require('path');

const PUERTO=3000;

app.listen(PUERTO,()=>{
    console.log("Aplicacion corriendo en puerto "+PUERTO);
});

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/register.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'));
});

app.get('/compras',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/carrito.html'));
});

//PRODUCTOS EN GENERAL//
app.get('/p-bicicletas',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/p-bicicletas.html'));
});
app.get('/p-monopatines',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/p-monopatines.html'));
});
app.get('/p-hoverboards',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/p-hoverboards.html'));
});

app.get('/p-skateboards',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/p-skateboards.html'));
});
app.get('/p-accesorios',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/p-accesorios.html'));
});

//PRODUCTOS INDIVIDUALES//
app.get('/producto-bicicleta-cortina',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-bicicleta-cortina.html'));
});
app.get('/producto-bicicleta-tourism',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-bicicleta-tourism.html'));
});
app.get('/producto-bicicleta-mountain',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-bicicleta-mountain.html'));
});
app.get('/producto-monopatin1',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-monopatin1.html'));
});
app.get('/producto-monopatin-blanco',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-monopatin-blanco.html'));
});
app.get('/producto-monopatin-infantil',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-monopatin-infantil.html'));
});
app.get('/producto-hoverboard1',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-hoverboard1.html'));
});
app.get('/producto-hoverboard2',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-hoverboard2.html'));
});
app.get('/producto-hoverboard3',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-hoverboard3.html'));
});
app.get('/producto-combo-skate',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-combo-skate.html'));
});
app.get('/producto-skate2',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-skate2.html'));
});
app.get('/producto-skate3',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto-skate3.html'));
});
app.get('/datos-tarjeta_respaldo',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/datos-tarjeta_respaldo.html'));
});