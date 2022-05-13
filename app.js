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
    res.sendFile(path.join(__dirname,'views/productCart.html'));
});

app.get('/producto',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/productDetail.html'));
});