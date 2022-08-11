const db = require("../database/models");
const sequelize = db.sequelize;


const productoController ={

    /***Muestra el listado de productos**/    
    index: async(req,res)=>{
       try{          
          const products = await db.Producto.findAll();          
          res.render("./productos/productosListado",{products:products});
       }catch(error){
          console.error("listado error ---> " + error);
       }   
    },    
    
    // Mostrar un producto HOME
    detail: async(req, res) => { 
        
        try{
            let producto= await db.Producto.findByPk(req.params.id,{include:[{associate: "categoria" }]});                       
            res.render("./productos/productoDetalle",{producto:producto}); 
         }catch(error){
            console.log(req.params.id);
            console.error("detail error ---> " + error);
            return;
         }   
    },
    
    /**** Categoria de Home **************************/
    category: async(req,res) =>{    
        const productos= await db.Producto.findAll({where: {categoria_id: req.params.id}});      
        res.render("./productos/productosCategoria", {products: productos});
    },

    /*** Combo para la vists de crear producto**/
    create: async(req, res) =>{        
        try{
            const categorias= await db.Categoria.findAll();
            res.render("./productos/productAdd", {categorias: categorias}); 
         }catch(error){
            console.error("create error ---> " + error);
         }   
    },

    /****Guarda nuevo producto***/    
    store: async(req, res) => {
        try{
            let archivo=null;
            if (req.file){
                archivo=req.file.filename; 
            }else{
                archivo="faltaimg.jpg";
            }
            await db.Producto.create({
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

    /***Edita producto ***/
    edit: async(req, res) => {       
        try{ 
            const producto= await db.Producto.findByPk(req.params.id,{include:["categoria"]});
            const categorias= await db.Categoria.findAll();    
            res.render("./productos/productEdit",{producto:producto, categorias:categorias}); 
         }catch(error){
            console.error("edit error ---> " + error);
         }      
    },
    
    /** Editar y actualizar un producto **/
    update: async(req, res) => { 
        try{
            let archivo=null;
            if (req.file){
               archivo=req.file.filename; 
            }else{
                archivo="faltaimg.jpg";
            }
           await db.Producto.update({
                name:req.body.name,
                price: req.body.price,
                description:req.body.description,
                image:archivo,
                categoria_id:req.body.category_id          
            },{
                where: {id : req.params.id}
            });
            res.redirect("/productos");
         }catch(error){
            console.error("update error ---> " + error);
         } 
    },

    
    /***Elimina un producto ***/
    destroy: async(req, res) => {
        try{
            const productos= await db.Producto.destroy({where: {id: req.params.id}});
            res.redirect("/productos");
         }catch(error){
            console.error("destroy error ---> " + error);
         }
    },

    /***Busca un producto por el nombre ***/
    search: async(req,res)=> {
        try{
            const searchedProducts = [];
            const products= await db.Producto.findAll();
            for (var i=0; i < products.length; i++){            
                if (products[i].name.includes(req.query.search)) {
                    searchedProducts.push(products[i]);
                }
            };            
            res.render("./productos/productosListado", {products: searchedProducts});
         }catch(error){
            console.error("search error ---> " + error);
         }
    }

}

module.exports=productoController;