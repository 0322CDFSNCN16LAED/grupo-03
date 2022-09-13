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
          
               const { carows, cacount } = await db.Producto.findAndCountAll({                  
                  where: {categoria_id: req.params.categoria_id}
               });

               res.status(200).json({
                  count: {
                     total: count,
                     status: 200,
                     url: req.originalUrl
                  },
                  /*
                  countByCategory: {
                     total: total de productos por categoria
                  },

               /*SELECT category, COUNT(*)
               FROM productos
               INNER JOIN categorias ON categoria_id = categorias.id
               GROUP BY category*/

               /* 
               const result = {}
               for(db.Categoria.id){
               result[db.Producto.categoria_id] += 1
               } */
                   
                  products: rows.map(function(producto){
                     return {
                        id: producto.id,
                        nombre: producto.name,
                        description: producto.descripcion,
                        category: producto.categoria_id,
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