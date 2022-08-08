const bcrypt = require("bcryptjs");
const db = require("../database/models");
const sequelize = db.sequelize;

const { validationResult } = require("express-validator");

const userController ={
    // Registro de usuario
    register: (req, res)=>{
        res.render('./usuario/register')
    },

    store: async(req, res) => {
        const errors = validationResult(req);
        const usuario= await db.Usuario.findOne({where: { email : req.body.email }});
        if (usuario){
            res.render("./usuario/register",{errors: {email: { msg: 'Este correo ya esta registrado'}}, old : req.body}); 
        }
      
        if (errors.isEmpty()) {
            let archivo=null;
            if (req.file){
                archivo=req.file.filename; 
            }else{
                archivo="faltaimg.jpg";
            }
            db.Usuario.create({
                name:req.body.name,
                user:req.body.user,
                email:req.body.email,       
                password:bcrypt.hashSync(req.body.password,10),
                imagen:archivo,
                rol_id:"2"
            });           
            res.redirect("/user/login");
        }else{
            res.render("./usuario/register", { errors: errors.mapped(), old: req.body });
        }        
    },
    
    login: (req, res)=>{            
        res.render('./usuario/login');
    },
    
    ingreso : async(req,res)=>{
        const errors = validationResult(req); 
        const usuario= await db.Usuario.findOne({where: { email : req.body.email }})
         
        if (usuario==undefined){
            return res.render("./usuario/login",{
                errors: {email: { msg: 'Este usuario no esta registrado'}}, old : req.body});
        }  
          
        let valiPaswor= bcrypt.compareSync(req.body.password, usuario.password);

        if (valiPaswor){
            req.session.loggedUser = req.body.email;
            if (req.body.recordarUsuario){
                res.cookie('infoEmail',req.body.email, { maxAge: (1000 * 60) * 60 });/*****guardo en email en cookies*****/
            }
            return res.redirect("/user/perfil");            
        }

        return res.render("./usuario/login",{
            errors: {password: { msg: 'Credenciales erradas'}}, old : req.body
        }); 
        
    },

    perfil: (req, res)=>{
        return res.render('./usuario/perfil',{
            user: req.session.loggedUser
        });
    },
    
    logout: (req, res)=>{
        res.clearCookie("infoEmail");
        req.session.destroy;        
        return res.redirect("/");
    } 
}

module.exports=userController;