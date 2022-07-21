module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Compras";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        precio: {
            type: dataTypes.FLOAT
        } ,
        descripcion:{
            type: dataTypes.STRING
        },        
        usuario_producto_id:{
            type: dataTypes.INTEGER
        }
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "compras", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Compra = sequelize.define(alias, cols, config); 
     
    /***5.- return tabla*************************************/
    return Compra;
 }