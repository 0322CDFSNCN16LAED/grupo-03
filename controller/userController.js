const db = require("../data/db-users");
const users = db.getAll();

const userController ={
    // Registro de usuario
    register: (req, res)=>{
        res.render('usuario/register')
    },

    store: (req, res) => {
        const newUser = req.body;
        if (users.length) {
            newUser.id = users[users.length - 1].id + 1;            
        } else {
            newUser.id = 1;
        }
        
        //CAMBIAR CAMPOS
        newUser.first_name = req.body.name;
        newUser.price= req.body.price;
        newUser.category=req.body.category;
        newUser.description=req.body.description;
        if (req.file){
            newUser.image=req.file.filename; /*******************/
        }else{
            newUser.image="faltaimg.jpg"
        }       

        users.push(newUser);
        db.saveAll(users);
        res.redirect("/");
    },
    
    login: (req, res)=>{
        res.render('usuario/login');
    }   
}

module.exports=userController;