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

    category:(req,res) =>{        
        res.render("./productos/listadoProducto", {
            products: products.filter((p) => p.category == req.params.category),
        });
    },

    create: (req, res) =>{
        res.render("./productos/productAdd");
    }
}

module.exports=productoController;




