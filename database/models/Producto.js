module.exports=(sequelize, dataTypes) =>{   
   const alias ="Producto";
   const cols= {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       name:{
           type: dataTypes.STRING
       },
       price: {
           type: dataTypes.FLOAT
       } ,
       description:{
           type: dataTypes.STRING
       },
       image:{
           type: dataTypes.STRING
       },
       categoria_id:{
           type: dataTypes.INTEGER        
       }
   };
   
   const config={
       tableName: "productos", /****nombre en la base de datos****/
       timestamps: false
   };   
  
   const Producto = sequelize.define(alias, cols, config); 
   
   Producto.associate= function(models){
       Producto.belongsTo(models.Categoria,{
          as: "categoria",
          foreignkey: "categoria_id",
          timestamps: false
       });
       Producto.belongsTo(models.Compra,{
        as: "compra",
        through: "CompraProducto",
        foreignKey : "producto_id",
        otherKey: "compra_id",
        timestamps: false
      });
   }
    
   /***5.- return tabla*************************************/
   return Producto;
}