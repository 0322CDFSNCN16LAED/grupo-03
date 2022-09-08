const bcrypt = require("bcryptjs");
const db = require("../../database/models");
const sequelize = db.sequelize;

const { validationResult } = require("express-validator");
const { json } = require("stream/consumers");

const userController ={ 
         /* ○ Deberá devolver un objeto literal con la siguiente estructura:
      ■ Una propiedad por cada campo en base.
      ■ Una URL para la imagen de perfil (para mostrar la imagen).
      ■ Sin información sensible (ej: password y categoría).*/
    detail : (req,res)=>{      
         ///localhost:3002/user/api/detail/1
         db.Usuario
         .findByPk(req.params.id)
         .then(usuario=>{
            return res.status(200).json({
               data: usuario,
               status: 200})
         }); 
    },

    email : (req,res)=>{   
         ///localhost:3002/user/api/email/pepito@gmail.com   
         db.Usuario
         .findOne({where: { email : req.params.email }})
         .then(usuario=>{
            return res.status(200).json(usuario)
         });     
         
    },

    /****Deberá devolver un objeto literal con la siguiente estructura:
      ■ count → cantidad total de usuarios en la base.
      ■ users → array con la colección de usuarios, cada uno con:
      ● id
      ● name
      ● email
      ● detail → URL para obtener el detalle.***/
    list: (req,res)=>{
         ///localhost:3002/user/api/list
         db.Usuario
         .findAll()
         .then(usuarios=>{
            return res.status(200).json({
               cantidad: usuarios.length,
               data: usuarios,
               status: 200
            })
         });          
     }    
}

module.exports=userController;