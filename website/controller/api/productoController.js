const db = require("../../database/models");
const sequelize = db.sequelize;


const productoController ={  
   list: async(req,res)=>{
         ///localhost:3002/productos/api/list
         try {
                  const { rows, count } = await db.Producto.findAndCountAll({
                     attributes: ["id", "name", "description", "categoria_id"],
                  });
                  
                  const totalByCategory = await db.Producto.findAll({                     
                     group: ["Categoria.id"],
                     attributes: ["Categoria.id",[sequelize.fn("COUNT", "Categoria.id"), "TotalByCategory"]],
                     include: ["categoria"]
                   });   
                   
                                     
                  res.status(200).json({
                     meta: {                        
                        status: 200,
                        url: req.originalUrl, 
                        totalproductos: count,                                               
                     },
                     data: {     
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
         ///localhost:3002/productos/api/categorias
         try{
               db.Categoria.findAll({ include: ["productos"] }).then((categorias)=>{
               let respuesta= {
                     meta: {
                        status: 200,
                        url: "productos/api/categorias",               
                        countByCategory: categorias.length
                     },
                     data: categorias,
                  };
                  res.json(respuesta); 
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
      //localhost:3002/productos/api/category
         try {
            const { rows, count } = await db.Producto.findAndCountAll({
               attributes: ["id", "name", "description", "categoria_id"],
            });
            
            const categorias = await db.Producto.findAll({                     
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
                     totalproductos: count,        
                     categorias                     
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

      lastProduct: async (req, res) => {
         //localhost:3002/productos/api/lastProduct
         try {           
           const productolast = await db.Producto.findAll({
             limit: 1,
             attributes: ["id","name","description","image"],
             order: [["id", "DESC"]],
           });
           
           res.status(200).json({
               meta: {
                  status: 200,
                  url: req.originalUrl,
               },

               data: {
                  id: productolast[0].id,
                  name: productolast[0].name,
                  description: productolast[0].description,  
                  detail:  `http://localhost:3002/productos/api/detail/${productolast[0].id}`,      
                  picture: `http://localhost:3002/imagenes/${productolast[0].image}`,          
               },
               
            });

         } catch (error) {
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