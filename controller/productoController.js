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
    },

     // Create -  Method to store
    store: (req, res) => {
        const newProduct = req.body;
        if (products.length) {
            newProduct.id = products[products.length - 1].id + 1;            
        } else {
            newProduct.id = 1;
        }
        newProduct.image = "Falta_imagen.jpg";
        products.push(newProduct);
        db.saveAll(products);
        res.redirect("/");
    },

    // Update - Form to edit
    /*edit: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find((product) => product.id == id);

        res.render("product-edit-form", { productToEdit: productToEdit });
    },
    // Update - Method to update
    update: (req, res) => {
        const productIndex = products.findIndex((p) => p.id == req.params.id);

        const product = products[productIndex];

        product.name = req.body.name;
        product.description = req.body.description;
        product.category = req.body.category;
        product.price = req.body.price;
        product.discount = req.body.discount;

        db.saveAll(products);

        res.redirect("/products");
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        const filteredProducts = products.filter((p) => {
            return p.id != req.params.id;
        });

        db.saveAll(filteredProducts);

        res.redirect("/products");
    },*/



}

module.exports=productoController;




