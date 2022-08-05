module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     let alias ="MetodoDepago";
 
    /**2.- nombre de las columnas*****************************************/ 
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(20)
        }
    };
 
    /***3.- configuracion***************************************/
    let config={
        tableName: "metododepago", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    let MetodoDepago = sequelize.define(alias, cols, config); 
    MetodoDepago.associate= function(models){
        MetodoDepago.hasMany(models.Compra,{
           as: "recompra",
           foreignkey : "id"
        })
    }
     
    /***5.- return tabla*************************************/
    return MetodoDepago;
 }