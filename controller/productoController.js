const db = require("../data/db");
const products = db.getAll();

const productoController ={
    productoDetalle: (req, res)=>{
        res.render('productos/productoDetalle');
    },
    
    listadoProducto: (req, res)=>{
        res.render('productos/listadoProducto');
    }, 
    
    detail: (req, res) => {
        res.render("productoDetalle", {
            product: db.getOne(req.params.id),
        });
    },
}

module.exports=productoController;




