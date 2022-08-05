module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Rol";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
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
    const config={
        tableName: "rol", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Rol = sequelize.define(alias, cols, config); 
    Rol.associate= function(models){
        Rol.hasMany(models.Usuario,{
           as: "reusuario",
           foreignkey : "id"
        })
    }
     
    /***5.- return tabla*************************************/
    return Rol;
 }