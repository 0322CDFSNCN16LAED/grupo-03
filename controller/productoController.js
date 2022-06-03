const productoController ={
    productoDetalle: (req, res)=>{
        res.render('productos/productoDetalle');
    },
    
    listadoProducto: (req, res)=>{
        res.render('productos/listadoProducto');
    },  
}

module.exports=productoController;




