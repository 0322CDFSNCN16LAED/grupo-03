module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Usuario";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(20)
        },  
        user:{
            type: dataTypes.STRING(20)
        }, 
        email:{
            type: dataTypes.STRING(50)
        },
        password:{
            type: dataTypes.STRING(100)
        },      
        imagen:{
            type: dataTypes.STRING(50)
        },        
        rol_id: {
            type: dataTypes.INTEGER
        }         
    };       
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "usuario", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Usuario = sequelize.define(alias, cols, config); 

    Usuario.associate= function(models){   
        Usuario.belongsTo(models.UsuarioCompra,{
            as: "rusuariocompra",
            foreignkey : "id"
        }),     
        Usuario.belongsTo(models.Rol,{
            as: "rerol",
            foreignkey : "rol_id"
        })        
    }
     
    /***5.- return tabla*************************************/
    return Usuario;
 }