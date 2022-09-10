
const {loadUsers,saveUser} = require('../data/db_modules');
const {validationResult} = require ('express-validator');
const colors = require ('../data/colors')


module.exports={

    index: (req, res, next) => {
        res.render('index', {colors});
      },
    
    validation: (req, res, next) => {
        res.send ('vamos por buen camino')
    },

    controlRegister: (req, res, next) => {
        const errors = validationResult(req);
        const {nombre,email,edad,colores} = req.body;
        const users = loadUsers();

        if (errors.isEmpty()){
            const newUser = {
                id: users[users.length - 1] ? users[users.length-1].id + 1 : 1,
                nombre: nombre.trim(),
                email : email.trim(),
                edad,
                colores
            }
            const usersModify = [...users,newUser];
            saveUser(usersModify);
            

            req.session.userLogin = {
                id: users.id,
                nombre,
                email,
                edad,
                colores
            }
            

            res.redirect('users/mensaje');

        } else {
            return res.render('index',{
                title : "Usando Session",
                colors,
                errors : errors.mapped(),
                old : req.body
            })
          }
    }
}