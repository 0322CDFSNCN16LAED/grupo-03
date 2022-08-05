module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="UsuarioCompra";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        usuario_id: {
            type: dataTypes.INTEGER
        },       
        compra_id: {
            type: dataTypes.INTEGER
        }                
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "usuariocompra", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const UsuarioCompra = sequelize.define(alias, cols, config); 

    UsuarioCompra.associate= function(models){        
        UsuarioCompra.belongsTo(models.Usuario,{
            as: "reusuario",
            foreignkey : "usuario_id"
         }),
         UsuarioCompra.hasMany(models.Compra,{
            as: "recompra",
            foreignkey : "compra_id"
         })
    }
     
    /***5.- return tabla*************************************/
    return UsuarioCompra;
 }