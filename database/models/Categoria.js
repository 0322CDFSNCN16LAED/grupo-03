module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Categorias";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: dataTypes.STRING(20)
        }
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "categorias", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Categoria = sequelize.define(alias, cols, config); 
    Categoria.associate= function(models){
        Categoria.hasMany(models.Producto,{
           as: "reproducto",
           foreignkey : "id"
        })
    }
     
    /***5.- return tabla*************************************/
    return Categoria;
 }