const bcrypt = require("bcryptjs");
const db = require("../data/db-users");
const users = db.getAll();
const { validationResult } = require("express-validator");


const userController ={
    // Registro de usuario
    register: (req, res)=>{
        res.render('./usuario/register')
    },

    store: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const newUser = req.body;
            if (users.length) {
                newUser.id = users[users.length - 1].id + 1;            
            } else {
                newUser.id = 1;
            } 
            newUser.name = req.body.name;
            newUser.user= req.body.user;
            newUser.email=req.body.email;        
            newUser.password=bcrypt.hashSync(req.body.password,10);
            delete newUser.confirmar;

            if (req.file){
                newUser.image=req.file.filename; 
            }else{
                newUser.image="faltaimg.jpg"
            } 
            users.push(newUser);
            db.saveAll(users);
            res.redirect("/user/login");
        }else{
            res.render("./usuario/register", { errors: errors.mapped(), old: req.body });
        }        
    },
    
    login: (req, res)=>{
        res.render('./usuario/login');
    }   
}

module.exports=userController;