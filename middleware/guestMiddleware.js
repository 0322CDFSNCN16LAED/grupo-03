function guestMiddleware(req,res,next){
    if (req.session.loggedUser){
        return res.redirect("/user/perfil");
    } 
    next();
}

module.exports = guestMiddleware;