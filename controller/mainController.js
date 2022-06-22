const db = require("../data/db");
const products = db.getAll();

const mainController ={
    home: (req, res)=>{
        res.render('home');
    },

    search: (req,res)=> {
        const searchedProducts = []
        for (var i=0; i < products.length; i++);
            if (products[i].name.includes(req.query.search)) {
                searchedProducts.push(products[i])
            }
        res.render("/productosListado", {searchedProducts: searchedProducts})
    }, 
    
}

module.exports=mainController;

