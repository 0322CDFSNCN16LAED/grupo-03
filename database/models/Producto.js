module.exports=(sequelize, dataTypes) =>{
   /**1.- nombre de la tabla*********************/
    const alias ="Productos";

   /**2.- nombre de las columnas*****************************************/ 
   const cols= {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       name:{
           type: dataTypes.STRING(50)
       },
       price: {
           type: dataTypes.FLOAT
       } ,
       description:{
           type: dataTypes.STRING(200)
       },
       image:{
           type: dataTypes.STRING(100)
       },
       categoria_id:{
           type: dataTypes.INTEGER        
       }
   };

   /***3.- configuracion***************************************/
   const config={
       tableName: "productos", /****nombre en la base de datos****/
       timestamps: false
   };
   
   /***4.- sequalize.define***********************************/
   const Producto = sequelize.define(alias, cols, config); 

   /*******************associate**************************/
   Producto.associate= function(models){
       Producto.belongsTo(models.Categoria,{
          as: "recategoria",
          foreignkey : "categoria_id"
       }),
       Producto.belongsTo(models.CompraProducto,{
        as: "recompra",
        foreignkey : "id"
     })
   }
    
   /***5.- return tabla*************************************/
   return Producto;
}