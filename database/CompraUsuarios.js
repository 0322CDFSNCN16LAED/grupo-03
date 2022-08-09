module.exports=(sequelize, dataTypes) =>{   
    const alias ="CompraUsuario";
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
        tableName: "comprausuarios", /****nombre en la base de datos****/
        timestamps: false
    };   
   
    const CompraUsuario = sequelize.define(alias, cols, config); 
    
    CompraUsuario.associate= function(models){
        CompraUsuario.belongsTo(models.Compra,{
           as: "compra",
           foreignkey : "compra_id"
        });
        CompraUsuario.belongsTo(models.Usuario,{
            as: "usuario",
            foreignkey : "usuario_id"
         })
    }
     
    /***5.- return tabla*************************************/
    return CompraUsuario;
 }