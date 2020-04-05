const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

usersCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

usersCtrl.createUser = async (req, res) => {
    let errors = [];
    const {name, email, password,
        conpassword} = req.body
        if (password != conpassword) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 6) {
    errors.push({ text: "Las contraseñas deben tener al menos 6 caracteres" });
  }
  if (errors.length > 0) {
    res.json(errors.pop)
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "Este correo ya está en uso");
      //res.redirect("/users/signup");
    } else {
        const newUser = new User({ 
            name:name,
            email:email,
            password:password });
            //newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.json('Usuario creado');
        }
      }
}
usersCtrl.SignIn = async (req, res) => {
  const { email, password } = req.body
  const newUser = new User ({
      email:email, password:password
  })
  //const match = await User.matchPassword(password);
  const log = (await User.find({email: email, password: password}))
  console.log(log)
  if(log){
      res.json("Ha iniciado")
  }
  else
      console.log("Algún dato es incorrecto o no existe")
  }
//*********************posible error */
  usersCtrl.logout = (req, res) => {
    jreq.logout();
    req.flash("success_msg", "Ha cerrado sesión");
    res.redirect("/users/signin");
  };

module.exports = usersCtrl;