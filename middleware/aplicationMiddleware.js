const db = require("../data/db-users");

function aplicationMiddleware(req,res,next){
    res.locals.isLogger =false;

    const emailCookie= req.cookies.infoEmail;
    const userFromCookie= db.findByEmail('email', emailCookie);
    
    if (userFromCookie){
        req.session.loggedUser= userFromCookie;
    }

    if (req.session.loggedUser){
       res.locals.isLogger =true;
       res.locals.loggedUser=req.session.loggedUser;/*****permitre manipular los datos en session****/
    }
    next();
}

module.exports = aplicationMiddleware;