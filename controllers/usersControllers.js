const colors = require ('../data/colors');



module.exports = {

    msj: (req,res) => {
        res.render('msj')
    },

    logout: (req,res) => {
        res.cookie('userLogin',req.session.userLogin,{maxAge: 1000 * 60})
        res.render('logout')
    }
}