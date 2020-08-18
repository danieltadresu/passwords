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

  var user = new modelUser.user();

/*
  bcrypt.hash(password, bcrypt.genSaltSync(5), function(err, hash) {
    console.log('Password ORIGINAL - ' + password);
    console.log('Password HASHEADA - ' + hash);
  });
  */

  user.userName = username;
  user.secondName = secondname;
  user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);


  user.save(function(err, myUserSaved) {
    if (err) return console.error(err);
    console.log('Saved!');
    console.log(user);

  });

  res.redirect('/');
});


router.get('/consultar', function(req, res, next) {
  res.render('search');
});


router.post('/select', function(req, res, next) {
  var userName = req.body.formUserName;
  var userPassword = req.body.formUserPassword;
  console.log(userName);


  modelUser.user.findOne({'userName': userName}, function(err, user){
    console.log(user);

    var check = bcrypt.compareSync(userPassword, user.password);

    if(check) {
      console.log('Son correctas!');
    }
  });




  res.redirect('/');
});



module.exports = router;
