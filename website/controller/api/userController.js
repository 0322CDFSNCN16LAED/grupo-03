const bcrypt = require("bcryptjs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const path = require('path');
const fs = require("fs");

const { validationResult } = require("express-validator");
const { json } = require("stream/consumers");

const userController ={  
    detail : async(req,res)=>{      
         ///localhost:3002/user/api/detail/1
         try {
            const usuario  = await db.Usuario.findByPk(req.params.id);
            res.status(200).json({               
                     id: usuario.id,
                     nombre: usuario.name, 
                     email: usuario.email,
                     picture: "http://localhost:3002/imagenes/"+usuario.imagen,
                     status: 200,                    
            });            
         } catch (error) {
               console.error(error);
               res.status(500).json({
                  meta: {
                     status: 500,
                     url: req.originalUrl,
                     errorName: error.name,
                     errorMsg: error.msg,
                  },
               });
         }   
    },

    email : async(req,res)=>{   
         ///localhost:3002/user/api/email/pepito@gmail.com 
         try {            
            const { rows, count } = await db.Usuario.findAndCountAll({                  
               where: { email : req.params.email },attributes: ["id", "name", "email"]
            });
            res.status(200).json({               
               data: rows.map(function(usuario){
                  return {
                     id: usuario.id,
                     nombre: usuario.name,
                     email: usuario.email,
                     picture: "http://localhost:3002/imagenes/"+usuario.imagen,                     
                     status: 200,
                     url: req.originalUrl,
                  }
               })               
            });            
         } catch (error) {
               console.error(error);
               res.status(500).json({
                  meta: {
                     status: 500,
                     url: req.originalUrl,
                     errorName: error.name,
                     errorMsg: error.msg,
                  },
               });
         }         
    },
    
    list: async(req,res)=>{ 
         //localhost:3002/user/api/list 
         try {            
               const { rows, count } = await db.Usuario.findAndCountAll({                  
                  attributes: ["id", "name", "email"],
               });
               res.status(200).json({
                  meta: {
                      status: 200,
                      url: req.originalUrl,
                      totalusuarios: count
                  },
                  data: rows.map(function(usuario){
                     
                     return {
                        
                        id: usuario.id,
                        name: usuario.name,
                        email: usuario.email,
                        detail: "http://localhost:3002/user/api/detail/"+usuario.id,   
                     }
                  })
               });            
         } catch (error) {
               console.error(error);
               res.status(500).json({
                  meta: {
                     status: 500,
                     url: req.originalUrl,
                     errorName: error.name,
                     errorMsg: error.msg,
                  },
               });
         }
   }   
   
}

module.exports=userController;