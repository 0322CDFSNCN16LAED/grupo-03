const db = require("../database/models");

const sequelize = db.sequelize;
//const products = db.getAll();

const productoController ={
        
    // Mostrar todos los productos (listo)   
    index: async(req,res)=>{
        const products = await sequelize.query("SELECT * FROM `productos`", { type: sequelize.QueryTypes.SELECT });
        res.render("./productos/productosListado",{products:products});
        /*let products=await db.Producto.findAll();        
        res.render("./productos/productosListado",{products:products});   */     
    },    
    
    // Mostrar un producto (listo)
    detail: async(req, res) => {        
        /*let producto= await db.Producto.findByPk(req.params.id,{
            include:[{associate: "categoria" }]
        });  */   
        let producto= await db.Producto.findByPk(req.params.id);   
        console.log(req.params.id);
        die(); 
        res.render("./productos/productoDetalle",{producto:producto});        
    },
    
     // Mostrar productos por categoría
    category:(req,res) =>{        
        res.render("./productos/productosCategoria", {
            products: products.filter((p) => p.category == req.params.category),
        });
    },

    // Agregar producto - vista(listo)
    create: async(req, res) =>{
        const categorias= await db.Categoria.findAll();
        res.render("./productos/productAdd", {categorias: categorias});        
    },

    // Agregar producto (listo)    
    store: (req, res) => {
        let archivo=null;
        if (req.file){
                archivo=req.file.filename; 
        }else{
                archivo="faltaimg.jpg";
        }
        db.Producto.create({
            name:req.body.name,
            price: req.body.price,
            description:req.body.description,
            image:archivo,
            categoria_id:req.body.category           
        });
        res.redirect("/productos");
    },

    // Editar un producto - vistas(listo)
    edit: async(req, res) => {
        console.log(req.params.id);
        let producto= await db.Producto.findByPk(req.params.id);        
        res.render("./productos/productEdit",{producto:producto});       
    },
    
    // Editar y actualizar un producto (listo)
    update: (req, res) => { 
        let archivo=null;
        if (req.file){
           archivo=req.file.filename; 
        }
        db.Producto.update({
            name:req.body.name,
            price: req.body.price,
            description:req.body.description,
            image:archivo,
            categoria_id:req.body.category           
        },{
            where: {id : req.params.id}
        });
        res.redirect("/productos");
    },

    
    // Delete - Delete one product from DB (listo)
    destroy: (req, res) => {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/productos");
    },

    search: (req,res)=> {
        const searchedProducts = [];
        
        for (var i=0; i < products.length; i++){            
            if (products[i].name.includes(req.query.search)) {
                console.log('entre a la validacion');
                searchedProducts.push(products[i]);
            }
        };
        console.log(searchedProducts);
        res.render("./productos/productosListado", {products: searchedProducts});
    }, 

}

module.exports=productoController;