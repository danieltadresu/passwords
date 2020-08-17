var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');


var modelUser = require('../models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res, next) {
  var username = req.body.formUserName;
  var secondname = req.body.formSecondName;
  var password = req.body.formPassword;
  var bcrypt_salt_rounds = 12;

  var user = new modelUser.user({
    userName: username,
    secondName: secondname,
    password: password
  });

  console.log(user);
  console.log('.........');

  bcrypt.hash(password, bcrypt_salt_rounds, function(err, hash) {
    console.log('PASSWORDS');
    console.log('..........');
    console.log('Clave Hasheada: ');
    console.log(hash);
    console.log('..........');
    console.log('Clave original: ');
    console.log(password);

    user.save(function(err, myUserSaved) {
      if (err) return console.error(err);
      console.log('Saved!');
      mongoose.disconnect();
    });


  });
  res.redirect('/');

});


router.post('/consultar', function(req, res, next) {
  var password = req.body.formPassword;

  /* PENDIENTE, LA TAREA ES:

    BUSCAR UN REGISTRO EN LA BASE DE DATOS CON LA CONTRASEÑA, DEVOLVERLO EN UN OBJETO Y COMPARARLO PARA USAR LAS CLAVES.
  */


  res.redirect('/');
});

module.exports = router;
