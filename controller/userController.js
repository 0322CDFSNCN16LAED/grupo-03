
const userController ={
    register: (req, res)=>{
        res.render('usuario/register')
    },
    
    login: (req, res)=>{
        res.render('usuario/login');
    }   
}

module.exports=userController;