const db = require("../data/db");
const products = db.getAll();

const mainController ={
    home: (req, res)=>{
        res.render('home');
    }   
    
}

module.exports=mainController;

