const db = require("../database/models");
const sequelize = db.sequelize;


const productoController ={

    /***Muestra el listado de productos**/    
    index: async(req,res)=>{
       try{          
          const products = await db.Producto.findAll();          
          res.render("./productos/productosListado",{products:products});
       }catch(error){
         return res.redirect("error",error);
       }   
    },    
    
    /***** Mostrar edit de producto *************/
    detail: async(req, res) => { 
        try{
            let producto= await db.Producto.findByPk(req.params.id,{include:[{associate: "categoria" }]});                       
            res.render("./productos/productoDetalle",{producto:producto}); 
         }catch(error){
            return res.redirect("error",error);
         }   
    },

    /****Consulta Home de productos */
    consult: async(req, res) => { 
        try{                  
            let producto= await db.Producto.findByPk(req.params.id);                  
            res.render("./productos/productoConsulta",{producto:producto}); 
         }catch(error){
            return res.redirect("error",error);
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
            return res.redirect("error",error);
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
                avatar:archivo,
                categoria_id:req.body.category           
            });
            res.redirect("/productos");
         }catch(error){
            return res.redirect("error",error);
         } 
    },

    /***Edita producto ***/
    edit: async(req, res) => {       
        try{ 
            const producto= await db.Producto.findByPk(req.params.id,{include:["categoria"]});
            const categorias= await db.Categoria.findAll();    
            res.render("./productos/productEdit",{producto:producto, categorias:categorias}); 
         }catch(error){
            return res.redirect("error",error);
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
                avatar:archivo,
                categoria_id:req.body.category_id          
            },{
                where: {id : req.params.id}
            });
            res.redirect("/productos");
         }catch(error){
            return res.redirect("error",error);
         } 
    },

    
    /***Elimina un producto ***/
    destroy: async(req, res) => {
        try{
            const productos= await db.Producto.destroy({where: {id: req.params.id}});
            res.redirect("/productos");
         }catch(error){
            return res.redirect("error",error);
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
            return res.redirect("error",error);
         }
    }

}

module.exports=productoController;