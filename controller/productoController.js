const db = require("../data/db");
const products = db.getAll();

const productoController ={
        
    // Mostrar todos los productos
    index: (req, res) => {
        res.render("./productos/productosListado", {
            products: products,
        });
    },
    
    
    // Mostrar un producto
    detail: (req, res) => {
        res.render("./productos/productoDetalle", {
            producto: db.getOne(req.params.id),
        });
    },
    
     // Mostrar productos por categoría
     category:(req,res) =>{        
        res.render("./productos/productosCategoria", {
            products: products.filter((p) => p.category == req.params.category),
        });
    },

    // Agregar producto - vista
    create: (req, res) =>{
        res.render("./productos/productAdd");
    },

    // Agregar producto 
    store: (req, res) => {
        const newProduct = req.body;
        if (products.length) {
            newProduct.id = products[products.length - 1].id + 1;            
        } else {
            newProduct.id = 1;
        }
        newProduct.image = "faltaimg.jpg";
        products.push(newProduct);
        db.saveAll(products);
        res.redirect("/productosListado");
    },

    // Editar un producto - vistas
    edit: (req, res) => {
        let productoEditar = products.find((product) => product.id == req.params.id);
        res.render("./productos/productEdit", { productoEditar: productoEditar });
    },

    
    // Editar y actualizar un producto
    update: (req, res) => {        
        const productIndex = products.findIndex((p) => p.id == req.params.id);        
        const product = products[productIndex];
        
        console.log(p);
        console.log(productIndex);
        console.log(product);        
        product.name = req.body.name;
        product.category = req.body.category;
        product.price = req.body.price;
        product.description = req.body.description;
        db.saveAll(products);
        res.redirect("/productosListado");
    },

    
    // Delete - Delete one product from DB
    destroy: (req, res) => {
        const filteredProducts = products.filter((p) => {
            return p.id != req.params.id;
        });        
        db.saveAll(filteredProducts);
        res.redirect("/");
    },

}

module.exports=productoController;