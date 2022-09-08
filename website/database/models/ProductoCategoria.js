module.exports=(sequelize, dataTypes) =>{   
    const alias ="ProductoCategoria";
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        categoria_id:{
            type: dataTypes.INTEGER        
        },
        producto_id:{
            type: dataTypes.INTEGER        
        }
    };
    
    const config={
        tableName: "productocategorias", /****nombre en la base de datos****/
        timestamps: false
    };   
   
    const ProductoCategoria = sequelize.define(alias, cols, config); 
    
    ProductoCategoria.associate= function(models){
        ProductoCategoria.belongsTo(models.Categoria,{
           as: "categoria",
           foreignKey : "categoria_id"
        });
        ProductoCategoria.belongsTo(models.Producto,{
            as: "producto",
            foreignKey : "producto_id"
         });
    }
     
    /***5.- return tabla*************************************/
    return ProductoCategoria;
 }