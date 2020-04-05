const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.Datos = async (req, res) => {
  var datos = await User.find();
  res.json(datos)
}

usersCtrl.SignUp = async (req, res) => {
  let errors = []
  const {name, email, password, confirm_password} = req.body
  res.json(req.body)
}

usersCtrl.singup = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body
  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 4) {
    errors.push({ text: "Las contraseñas deben tener al menos 4 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "Este correo ya está en uso");
      res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Ya está registrado");
      res.redirect("/users/signin");
      res.json(newUser)
    }
  }
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true
  });

usersCtrl.SignIn = async (req, res) => {
  const { correo, contraseña } = req.body
    const log = (await User.find({email: correo, password: contraseña}))
    res.json(log)
    if(log){
        res.json("Ha iniciado")
    }
    else{
        console.log("Algún dato es incorrecto o no existe")
    }
}

usersCtrl.logout = (req, res) => {
  jreq.logout();
  req.flash("success_msg", "Ha cerrado sesión");
  res.redirect("/users/signin");
};

usersCtrl.register = (req, res) => {
  res.redirect("users/registros");
}

module.exports = usersCtrl;