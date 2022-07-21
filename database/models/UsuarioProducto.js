module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="UserProductos";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        producto_id:{
            type: dataTypes.INTEGER
        }
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "userproductos", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const UserProducto = sequelize.define(alias, cols, config); 
     
    /***5.- return tabla*************************************/
    return UserProducto;
 }