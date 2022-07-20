function aplicationMiddleware(req,res,next){
    res.locals.isLogger =false;
    
    if (req.session.loggedUser){
       res.locals.isLogger =true;
    }
    next();
}

module.exports = aplicationMiddleware;