const db = require("../database/models");

async function aplicationMiddleware(req,res,next){
    res.locals.isLogger =false;

    const emailCookie= req.cookies.infoEmail;    
    if (emailCookie){
        const userFromCookie= await db.Usuario.findOne({where: { email : emailCookie },include:["rol"]});

        if (userFromCookie){
            req.session.loggedUser= userFromCookie;
        }
    }
    
    if (req.session.loggedUser){
        res.locals.isLogger =true;
        res.locals.loggedUser=req.session.loggedUser;/*****permitre manipular los datos en session****/
    }
    
    next();
}

module.exports = aplicationMiddleware;