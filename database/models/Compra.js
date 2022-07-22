module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Compras";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        precio: {
            type: DataTypes.FLOAT
        } ,
        descripcion:{
            type: DataTypes.STRING
        },        
        usuario_producto_id:{
            type: DataTypes.INTEGER
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