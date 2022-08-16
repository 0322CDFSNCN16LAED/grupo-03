const db = require("../database/models");
const sequelize = db.sequelize;

const mainController ={
    home: async(req, res)=>{
        try{          
            const products = await db.Producto.findAll();      
            res.render('home',{products:products});
         }catch(error){
           return res.redirect("error",error);
         }   


        
    }   
    
}

module.exports=mainController;

