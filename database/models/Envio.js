module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Envios";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        calle: {
            type: DataTypes.STRING(50)
        } ,
        cp:{
            type: DataTypes.STRING(10)
        },        
        numero:{
            type: DataTypes.STRING(10)
        },
        piso:{
            type: DataTypes.STRING(10)
        },
        apartamento:{
            type: DataTypes.STRING(10)
        },
        fechaEntrega:{
            type: DataTypes.DATE
        },        
        provincia:{
            type: DataTypes.STRING(50)
        },
        localidad:{
            type: DataTypes.STRING(50)
        },
        municipio:{
            type: DataTypes.STRING(50)
        }
    };
 
    /***3.- configuracion***************************************/
    const config={
        tableName: "envios", /****nombre en la base de datos****/
        timestamps: false
    };
    
    /***4.- sequalize.define***********************************/
    const Envio = sequelize.define(alias, cols, config); 
    Envio.associate= function(models){
        Envio.belongsTo(models.Compra,{
           as: "recompra",
           foreignkey : "id"
        })
    }
     
    /***5.- return tabla*************************************/
    return Envio;
 }