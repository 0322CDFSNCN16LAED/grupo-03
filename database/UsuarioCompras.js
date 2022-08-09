module.exports=(sequelize, dataTypes) =>{   
    const alias ="UsuarioCompra";
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        usuario_id:{
            type: dataTypes.INTEGER        
        },
        compra_id:{
            type: dataTypes.INTEGER        
        }
    };
    
    const config={
        tableName: "usuariocompras", /****nombre en la base de datos****/
        timestamps: false
    };   
   
    const UsuarioCompra = sequelize.define(alias, cols, config); 
    
    UsuarioCompra.associate= function(models){
        UsuarioCompra.belongsTo(models.Compra,{
           as: "compra",
           foreignkey : "compra_id"
        });
        UsuarioCompra.belongsTo(models.Usuario,{
            as: "usuario",
            foreignkey : "usuario_id"
         })
    }
     
    /***5.- return tabla*************************************/
    return UsuarioCompra;
 }