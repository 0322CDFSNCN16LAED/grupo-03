const db = require("../../database/models");
const sequelize = db.sequelize;


const productoController ={   
    /*falta: countByCategory → objeto literal con una propiedad por categoría
    con el total de productos*/ 
    list: async(req,res)=>{      
      ///localhost:3002/productos/api/list
      try {            
               const { rows, count } = await db.Producto.findAndCountAll({                  
                  attributes: ["id", "name", "price", "description"],
               });
               res.status(200).json({
                  meta: {
                     status: 200,
                     url: req.originalUrl,
                     total: count,
                  },
                  data: rows.map(function(producto){
                     return {
                        id: producto.id,
                        nombre: producto.name,
                        price: producto.price,
                        description: producto.descripcion,
                        detail: "http://localhost:3002/productos/api/detail/"+producto.id,   
                     }
                  })
               });            
            } catch (error) {
                  console.error(error);
                  res.status(500).json({
                     meta: {
                        status: 500,
                        url: req.originalUrl,
                        errorName: error.name,
                        errorMsg: error.msg,
                     },
                  });
            }
      },
    
   
    detail : async(req,res)=>{      
       ///localhost:3002/productos/api/detail/1
      try {
               const producto  = await db.Producto.findByPk(req.params.id);
               res.status(200).json({               
                        id: producto.id,
                        name: producto.name,
                        price: producto.price,
                        category: producto.categoria_id,
                        picture: "http://localhost:3002/imagenes/"+producto.image,
                        status: 200,                    
               });            
            } catch (error) {
                  console.error(error);
                  res.status(500).json({
                     meta: {
                        status: 500,
                        url: req.originalUrl,
                        errorName: error.name,
                        errorMsg: error.msg,
                     },
                  });
            }   
      },

    
      category : async(req,res)=>{   
      //localhost:3002/productos/api/category/1
      try {            
         const { rows, count } = await db.Producto.findAndCountAll({                  
            where: {categoria_id: req.params.categoria_id},
            attributes: ["id", "name", "price", "description", "categoria_id"]
         });
         res.status(200).json({               
            data: rows.map(function(producto){
               return {
                  id: producto.id,
                  name: producto.name,
                  price: producto.price,
                  category: producto.categoria_id,
                  picture: "http://localhost:3002/imagenes/"+producto.image,                     
                  status: 200,
                  url: req.originalUrl,
               }
            })               
         });            
      } catch (error) {
            console.error(error);
            res.status(500).json({
               meta: {
                  status: 500,
                  url: req.originalUrl,
                  errorName: error.name,
                  errorMsg: error.msg,
               },
            });
      }         
    },
    
    
    
}

module.exports=productoController;