
const {loadUsers,saveUser} = require('../data/db_modules');
const {validationResult} = require ('express-validator');

module.exports={

    index: (req, res, next) => {
        res.render('index', { title: 'Session & Cookies' });
      },
    
    validation: (req, res, next) => {
        res.send ('vamos por buen camino')
    },

    controlRegister: (req, res, next) => {
        const errors = validationResult(req);
        const {nombre,email,edad} = req.body;
        const users = loadUsers();


        if (errors.isEmpty()){
            const newUser = {
                id: users[users.length - 1] ? users[users.length-1].id + 1 : 1,
                nombre: nombre.trim(),
                email : email.trim(),
                edad,
            }
            const usersModify = [...users,newUser];
            saveUser(usersModify);
            res.redirect('users/mensaje');
           } else {
            return res.render('index',{
                title : "macacnon",
                errors : errors.mapped(),
                old : req.body
            })
          }
    }
}