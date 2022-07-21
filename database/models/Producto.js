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
       nombre:{
           type: dataTypes.STRING
       },
       precio: {
           type: dataTypes.FLOAT
       } ,
       descripcion:{
           type: dataTypes.STRING
       },
       imagen:{
           type: dataTypes.STRING
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
    
   /***5.- return tabla*************************************/
   return Producto;
}