module.exports=(sequelize, dataTypes) =>{
    /**1.- nombre de la tabla*********************/
     const alias ="Envio";
 
    /**2.- nombre de las columnas*****************************************/ 
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        calle: {
            type: dataTypes.STRING
        } ,
        cp:{
            type: dataTypes.STRING
        },        
        numero:{
            type: dataTypes.STRING
        },
        piso:{
            type: dataTypes.STRING
        },
        apartamento:{
            type: dataTypes.STRING
        },
        fechaEntrega:{
            type: dataTypes.DATE
        },        
        provincia:{
            type: dataTypes.STRING
        },
        localidad:{
            type: dataTypes.STRING
        },
        municipio:{
            type: dataTypes.STRING
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
           as: "compra",
           foreignKey : "envio_id"
        });
    }
     
    /***5.- return tabla*************************************/
    return Envio;
 }