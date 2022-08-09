module.exports=(sequelize, dataTypes) =>{    
    const alias ="Categoria";
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: dataTypes.STRING
        }
    };
    const config={
        tableName: "categorias", /****nombre en la base de datos****/
        timestamps: false
    };
      
    const Categoria = sequelize.define(alias, cols, config); 
    
    Categoria.associate= function(models){
        Categoria.hasMany(models.Producto,{
           as: "producto",
           foreignkey : "categoria_id" ///relacopn entre las dos tablas///
        })
    }
      
    return Categoria;
 }