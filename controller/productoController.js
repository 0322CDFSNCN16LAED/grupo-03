const db = require("../data/db");
const products = db.getAll();

const productoController ={
        
    // Root - Show all products
    index: (req, res) => {
        res.render("./productos/listadoProducto", {
            productos: products,
        });
    },
    
    detail: (req, res) => {
        res.render("./productos/productoDetalle", {
            producto: db.getOne(req.params.id),
        });
    },
}

module.exports=productoController;




