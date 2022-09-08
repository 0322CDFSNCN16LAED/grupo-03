const db = require("../../database/models");
const sequelize = db.sequelize;


const productoController ={    
         /****Deberá devolver un objeto literal con la siguiente estructura:
      ■ count → cantidad total de productos en la base.
      ■ countByCategory → objeto literal con una propiedad por categoría
      con el total de productos.
      ■ products → array con la colección de productos, cada uno con:
      ● id
      ● name
      ● description
      ● un array con principal relación de uno a muchos (ej:
      categories).
      ● detail → URL para obtener el detalle.****/
    list: (req,res)=>{      
      ///localhost:3002/productos/api/list
      db.Producto
         .findAll()
         .then(productos=>{
            return res.status(200).json({
               cantidad: productos.length,
               data: productos, ///.map
               status: 200
            })
         });                     
    },    
     
      /*****Deberá devolver un objeto literal con la siguiente estructura:
   ■ una propiedad por cada campo en base.
   ■ un array por cada relación de uno a muchos (categories, colors,
   sizes, etc).
   ■ Una URL para la imagen del producto (para mostrar la imagen). */
    detail: (req, res) => {          
         ///localhost:3002/productos/api/detail/1
          db.Producto
            .findByPk(req.params.id)
            .then(producto=>{
               return res.status(200).json({
                  data: producto,
                  status: 200})
            });  
    },
   

    /**** consulta por Categoria **************************/
    category: (req,res) =>{ 
      //localhost:3002/productos/api/category/1
        db.Producto
         .findAll({where: {categoria_id: req.params.categoria_id}})
         .then(productos=>{
            return res.status(200).json({
               cantidad: productos.length,
               data: productos,
               status: 200
            })
         }); 
    }

    
}

module.exports=productoController;