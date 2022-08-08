module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Compra";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        precio: {
            type: dataTypes.FLOAT
        } ,
        descripcion:{
            type: dataTypes.STRING
        }, 
        fechacompra:{
            type: dataTypes.DATE
        },    
        metododepago_id:{
            type: dataTypes.INTEGER
        },
        envio_id:{
            type: dataTypes.INTEGER
        },
        compra_id:{
            type: dataTypes.INTEGER
        }
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "compras", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Compra = sequelize.define(alias, cols, config); 
    
    Compra.associate= function(models){
        Compra.belongsTo(models.Usuario,{
           as: "usuario",
           through: "CompraUsuario",
           foreignKey : "compra_id",
           otherKey: "usuario_id",
           timestamps: false
        }),
         Compra.belongsTo(models.Producto,{
             as: "producto",
             through: "CompraProducto",
             foreignKey : "compra_id",
             otherKey: "producto_id",
             timestamps: false
        }),      
        Compra.belongsTo(models.MetodoDepago,{
            as: "metododepago",
            foreignKey : "metododepago_id"
        }),
        Compra.belongsTo(models.Envio,{
            as: "envio",
            foreignKey : "envio_id"
        })
    }
     
     
    /***5.- return tabla*************************************/
    return Compra;
 }