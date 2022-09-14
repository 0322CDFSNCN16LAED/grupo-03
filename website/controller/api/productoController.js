const db = require("../../database/models");
const sequelize = db.sequelize;


const productoController ={   
    /*falta: countByCategory → objeto literal con una propiedad por categoría
    con el total de productos*/ 
   list: async(req,res)=>{
         ///localhost:3002/productos/api/list
         try {
                  const { rows, count } = await db.Producto.findAndCountAll({
                     attributes: ["id", "name", "description", "categoria_id"],
                  });
                  
                  const totalByCategory = await db.Producto.findAll({                     
                     group: ["Categoria.id"],
                     attributes: ["Categoria.id",[sequelize.fn("COUNT", "Categoria.id"), "TotalCategory"]],
                     include: ["categoria"]
                   });                  
                  
                  res.status(200).json({
                     meta: {                        
                        status: 200,
                        url: req.originalUrl,                                               
                     },
                     data: {
                           count: count,        
                           totalByCategory,
                           productos: rows.map(function(producto){
                              return {                                 
                                 id: producto.id,
                                 nombre: producto.name,
                                 description: producto.description,
                                 category: producto.categoria_id,
                                 detail: "http://localhost:3002/productos/api/detail/"+producto.id
                              }
                           })
                     }
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
               const categoria = await db.Categoria.findByPk(producto.categoria_id)
               res.status(200).json({               
                        id: producto.id,
                        name: producto.name,
                        price: producto.price,
                        category_name: categoria.category, 
                        category_number: producto.categoria_id,
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

   categories: async (req, res) => { 
const { rows, count } = await db.Categoria.findAndCountAll({                  
   
   attributes: ["id", "category"]
});
      res.status(200).json({
         meta: {
            status: 200,
            url: req.originalUrl,
            countByCategory: count
         },
         data: rows
      })
},
    
      category : async(req,res)=>{   
      //localhost:3002/productos/api/category/1
      try {            
         const { rows, count } = await db.Producto.findAndCountAll({                  
            where: {categoria_id: req.params.categoria_id},
            attributes: ["id", "name", "price", "description", "categoria_id"]
         });

         
         res.status(200).json({ 
            meta: {
               status: 200,
               url: req.originalUrl,
               countByCategory: count
            },             
            data: rows.map(function(producto){
               return {
                  id: producto.id,
                  name: producto.name,
                  category: producto.categoria_id,
                  picture: "http://localhost:3002/imagenes/"+producto.image,                     
                  status: 200,
                  url: req.originalUrl                  
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
    }   
    
}

module.exports=productoController;