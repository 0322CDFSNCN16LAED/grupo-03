module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Users";
 
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
        imagen:{
            type: dataTypes.STRING
        }        
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "users", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const User = sequelize.define(alias, cols, config); 
     
    /***5.- return tabla*************************************/
    return User;
 }