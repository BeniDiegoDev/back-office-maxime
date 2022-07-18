var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')
var presentationModel = require('../models/presentationModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  if (!req.session.user) {
    req.session.user = null;
  }
  res.render('index');
});

/* ROUTE GET HOME */
router.get('/home', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var user = await userModel.find(req.session.user);
    res.render('home', { user });
  }
});

/* ROUTE GET PRESENTATION */
router.get('/presentation', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var presentation = await presentationModel.find();
    res.render('presentation', { presentation });
  }
});

router.get('/updatepresentation', async function (req, res, next) {
  var presentationList = await presentationModel.find();

  for (var i = 0; i < presentationList.length; i++) {

    await presentationModel.updateOne({
      _id: req.query.idFromFront,
    }, {
      photo: req.query.photoFromFront,
      presentation: req.query.presentationFromFront,
      description: req.query.descriptionFromFront,
    });

  };

  res.redirect('/presentation');
});

/* ROUTE GET GALERIE */
router.get('/galerie', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var galerie = await photoModel.find();

    res.render('galerie', { galerie });
  }
});

/* ROUTE ADD PHOTO GALERIE */
router.post('/addphoto', async function (req, res, next) {

  var searchPhoto = await photoModel.findOne({
    name: req.body.nameFromFront,
  })

  if (!searchPhoto) {
    var newPhoto = new photoModel({
      name: req.body.nameFromFront,
      categorie: req.body.categorieFromFront,
      img: req.body.imgFromFront,
      miniatures: req.body.miniaturesFromFront,
    })

    await newPhoto.save();

    res.redirect('/galerie');
  } else {

  }
});

/* ROUTE DELETE PHOTO GALERIE */
router.get('/deletephoto', async function (req, res, next) {

  await photoModel.deleteOne({
    _id: req.query.id
  });

  res.redirect('/galerie');
});

router.get('/updatephoto', async function (req, res, next) {
  var photoList = await photoModel.find();

  for (var i = 0; i < photoList.length; i++) {

    await photoModel.updateOne({
      _id: req.query.idFromFront,
    }, {
      name: req.query.nameFromFront,
      categorie: req.query.categorieFromFront,
      img: req.query.imgFromFront,
      miniatures: req.query.miniaturesFromFront,
    });

  };

  res.redirect('/galerie');
});

/* ROUTE GET CONTACT */
router.get('/contact', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {

    var user = await userModel.findOne({
      user: "admin",
    })

    res.render('contact', { user });
  }
});

router.get('/updatecontact', async function (req, res, next) {
  var contactList = await userModel.find();

  for (var i = 0; i < contactList.length; i++) {

    await userModel.updateOne({
      _id: req.query.idFromFront,
    }, {
      firstName: req.query.firstNameFromFront,
      lastName: req.query.lastNameFromFront,
      society: req.query.societyFromFront,
      email: req.query.emailFromFront,
      emailPro: req.query.emailProFromFront,
      phoneNumber: req.query.phoneNumberFromFront,
      web: req.query.webFromFront,
      instagram: req.query.instagramFromFront,
      facebook: req.query.facebookFromFront,

    });

  };

  res.redirect('/contact');
});

/* ROUTE GET COMPTE */
router.get('/compte', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {

    var user = await userModel.findOne(req.session.user);

    res.render('compte', { user });
  }
});


router.get('/updatecompte', async function (req, res, next) {

  var userId = req.query.idFromFront;
  var password = req.query.passwordFromFront;
  var passwordConfirm = req.query.passwordConfirmFromFront;
  var newPassword = req.query.newPasswordFromFront;
  var newPasswordConfirm = req.query.newPasswordConfirmFromFront;

  var user = await userModel.findOne({ _id: userId });

  if (user) {
    if (bcrypt.compareSync(passwordConfirm, user.password) && bcrypt.compareSync(password, user.password)) {
      if (newPassword == newPasswordConfirm) {
        await userModel.updateOne({
          _id: userId,
        }, {
          password: bcrypt.hashSync(newPassword, 10),
        });
        console.log("Mot de passe mis a jour");
      } else {
        console.log("Nouveau mot de passe ne concordonne pas");
      }
      console.log("Ancien mot de passe OK");
      res.redirect('/compte');
    } else {
      console.log("Ancien mot de passe Erreur");
      res.redirect('/compte')
    }
  }

});

module.exports = router;
