module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Compra";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        precio: {
            type: DataTypes.FLOAT
        } ,
        descripcion:{
            type: DataTypes.STRING(100)
        }, 
        fechacompra:{
            type: DataTypes.DATE
        },    
        metododepago_id:{
            type: DataTypes.INTEGER
        },
        envio_id:{
            type: DataTypes.INTEGER
        }
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "compra", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Compra = sequelize.define(alias, cols, config); 
    
    Compra.associate= function(models){
        Compra.belongsTo(models.UsuarioCompra,{
           as: "reusuariocompra",
           foreignkey : "id"
        }),
         Compra.belongsTo(models.CompraProducto,{
             as: "recompraproducto",
             foreignkey : "id"
        }),      
        Compra.belongsTo(models.MetodoDepago,{
            as: "remetododepago",
            foreignkey : "metododepago_id"
        }),
        Compra.belongsTo(models.Envio,{
            as: "reenvio",
            foreignkey : "envio_id"
        })
    }
     
     
    /***5.- return tabla*************************************/
    return Compra;
 }