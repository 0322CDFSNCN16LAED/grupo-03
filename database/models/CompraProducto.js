module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="CompraProducto";
 
    /**2.- nombre de las columnas*****************************************/ 
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
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "compraproducto", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const CompraProducto = sequelize.define(alias, cols, config); 
 
    /*******************associate**************************/
    CompraProducto.associate= function(models){
        CompraProducto.belongsTo(models.Compra,{
           as: "recompra",
           foreignkey : "compra_id"
        }),
        CompraProducto.hasMany(models.Producto,{
            as: "reproducto",
            foreignkey : "producto_id"
         })
    }
     
    /***5.- return tabla*************************************/
    return CompraProducto;
 }