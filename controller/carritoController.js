const carritoController ={
    carrito: (req, res)=>{
        res.render('ventas/carrito');
    },
    
    datosTarjeta: (req, res)=>{
        res.render('ventas/datosTarjeta');
    },  
}

module.exports=carritoController;

