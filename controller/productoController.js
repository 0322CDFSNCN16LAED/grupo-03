const db = require("../database/models");

const sequelize = db.sequelize;
//const products = db.getAll();

const productoController ={
    // Mostrar todos los productos    
    index: async(req,res)=>{
       try{
          //const products = await sequelize.query("SELECT * FROM `productos`", { type: sequelize.QueryTypes.SELECT });
          const products = await db.Producto.findAll();
          console.log(products);
          res.render("./productos/productosListado",{products:products});
       }catch(error){
          console.error("listado error ---> " + error);
       }   
    },    
    
    // Mostrar un producto (listo)
    detail: async(req, res) => { 
        try{
            let producto= await db.Producto.findByPk(req.params.id,{include:[{associate: "categoria" }]});
            console.log(req.params.id);
            die(); 
            res.render("./productos/productoDetalle",{producto:producto}); 
         }catch(error){
            console.error("detail error ---> " + error);
         }   
    },
    
     // Mostrar productos por categoría
    category:(req,res) =>{        
        res.render("./productos/productosCategoria", {
            products: products.filter((p) => p.category == req.params.category),
        });
        
    },

    // Agregar producto - vista(listo)
    create: async(req, res) =>{        
        try{
            const categorias= await db.Categoria.findAll();
            res.render("./productos/productAdd", {categorias: categorias}); 
         }catch(error){
            console.error("create error ---> " + error);
         }   
    },

    // (listo)    
    store: (req, res) => {
        try{
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
         }catch(error){
            console.error("store error ---> " + error);
         } 
    },

    // Editar un producto - vistas(listo)
    edit: async(req, res) => {       
        try{            
            let producto= await db.Producto.findByPk(req.params.id);       
            console.log(producto); 
            res.render("./productos/productEdit",{producto:producto}); 
         }catch(error){
            console.error("edit error ---> " + error);
         }      
    },
    
    // Editar y actualizar un producto (listo)
    update: (req, res) => { 
        try{
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
         }catch(error){
            console.error("update error ---> " + error);
         } 
    },

    
    // Delete - Delete one product from DB (listo)
    destroy: async(req, res) => {
        try{
            const productos= await db.Producto.destroy({where: {id: req.params.id}});
            res.redirect("/productos");
         }catch(error){
            console.error("destroy error ---> " + error);
         }
    },
    ////listo
    search: async(req,res)=> {
        try{
            const searchedProducts = [];
            const products= await db.Producto.findAll();
            for (var i=0; i < products.length; i++){            
                if (products[i].name.includes(req.query.search)) {
                    console.log('entre a la validacion');
                    searchedProducts.push(products[i]);
                }
            };
            console.log(searchedProducts);
            res.render("./productos/productosListado", {products: searchedProducts});
         }catch(error){
            console.error("search error ---> " + error);
         }
    }

}

module.exports=productoController;