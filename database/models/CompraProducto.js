module.exports=(sequelize, dataTypes) =>{   
    const alias ="CompraProducto";
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        compra_id:{
            type: dataTypes.INTEGER        
        },
        producto_id:{
            type: dataTypes.INTEGER        
        }
    };
    
    const config={
        tableName: "compraproductos", /****nombre en la base de datos****/
        timestamps: false
    };   
   
    const CompraProducto = sequelize.define(alias, cols, config); 
    
    CompraProducto.associate= function(models){
        CompraProducto.belongsTo(models.Compra,{
           as: "compra",
           foreignkey : "compra_id"
        });
        CompraProducto.belongsTo(models.Producto,{
            as: "producto",
            foreignkey : "producto_id"
         });
    }
     
    /***5.- return tabla*************************************/
    return CompraProducto;
 }