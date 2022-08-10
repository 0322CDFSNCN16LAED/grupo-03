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
            type: dataTypes.STRING
        },  
        user:{
            type: dataTypes.STRING
        }, 
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },      
        imagen:{
            type: dataTypes.STRING
        }      
    };       
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "usuarios", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Usuario = sequelize.define(alias, cols, config); 

    Usuario.associate= function(models){   
        /*Usuario.belongsTo(models.Compra,{
            as: "compra",
            through: "CompraUsuario",
            foreignKey : "usuario_id",
            otherKey: "compra_id",
            timestamps: false
        }); */  
        Usuario.belongsTo(models.Rol,{
            as: "rol",
            foreignKey : "rol_id"
        });        
    }
     
    /***5.- return tabla*************************************/
    return Usuario;
 }