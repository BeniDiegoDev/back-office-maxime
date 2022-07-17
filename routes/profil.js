var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')
var presentationModel = require('../models/presentationModel')

router.post('/importprofil', async function (req, res, next) {

  var admin = [
    {
      user: "dev",
      firstName: "Benjamin",
      lastName: "D'ONOFRIO",
      society: "BeniDiego.js",
      email: "",
      emailPro: "benidiegopro@gmail.com",
      password: "",
      address: "",
      phoneNumber: "0699757781",
      web: "https://benit.fr",
      instagram: "",
      facebook: "",
    },
    {
      user: "admin",
      firstName: "Maxime",
      lastName: "Turpault",
      society: "",
      email: "maxime.turpault92@gmail.com",
      emailPro: "turpaultphotographie@gmail.com",
      password: "",
      address: "",
      phoneNumber: "0770102320",
      web: "https://maximeturpault.benit.fr",
      instagram: "https://www.instagram.com/maximeturpault/",
      facebook: "https://www.facebook.com/profile.php?id=100012629315440",
    },
  ]

  for (let i = 0; i < admin.length; i++) {
    var newAdmin = new userModel({
      token: uid2(32),
      user: admin[i].user,
      firstName: admin[i].firstName,
      lastName: admin[i].lastName,
      society: admin[i].society,
      email: admin[i].email,
      emailPro: admin[i].emailPro,
      password: bcrypt.hashSync(admin[i].password, 10),
      address: admin[i].address,
      phoneNumber: admin[i].phoneNumber,
      web: admin[i].web,
      instagram: admin[i].instagram,
      facebook: admin[i].facebook,
    });

    var adminSave = await newAdmin.save();
  }

  res.json({ adminSave });
});

router.get('/recupprofil', async function (req, res, next) {

  var profil = await userModel.findOne({
    user: "admin",
  })

  res.json({
    profil: [
      {
        firstName: profil.firstName,
        lastName: profil.lastName,
        society: profil.society,
        email: profil.email,
        emailPro: profil.emailPro,
        phoneNumber: profil.phoneNumber,
        web: profil.web,
        instagram: profil.instagram,
        facebook: profil.facebook,
      }
    ]
  })
});

router.post('/importphoto', async function (req, res, next) {

  var photos = [
    { categorie: 'Architectures', name: 'Chemins A', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696053/Portfolio%20Maxime%20Turpault/Architectures/Chemins.a_dq5ex6.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.a_dmj20x.jpg' },
    { categorie: 'Architectures', name: 'Chemins B', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696053/Portfolio%20Maxime%20Turpault/Architectures/Chemins.b_lzmvvg.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.b_ebg0xv.jpg' },
    { categorie: 'Architectures', name: 'Chemins C', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696053/Portfolio%20Maxime%20Turpault/Architectures/Chemins.c_xvzfbg.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.c_pkcexc.jpg' },
    { categorie: 'Architectures', name: 'Chemins D', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696053/Portfolio%20Maxime%20Turpault/Architectures/Chemins.d_wykbmh.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.d_wejwpw.jpg' },
    { categorie: 'Architectures', name: 'Chemins E', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696053/Portfolio%20Maxime%20Turpault/Architectures/Chemins.e_vj2o12.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.e_gjizrw.jpg' },
    { categorie: 'Architectures', name: 'Chemins F', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696053/Portfolio%20Maxime%20Turpault/Architectures/Chemins.f_j0tfki.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.f_iuvyej.jpg' },
    { categorie: 'Architectures', name: 'Chemins G', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696054/Portfolio%20Maxime%20Turpault/Architectures/Chemins.g_watsh7.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/Chemins.g_hui73p.jpg' },
    { categorie: 'Architectures', name: 'La Défense A', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696054/Portfolio%20Maxime%20Turpault/Architectures/La_D%C3%A9fense.a_lhrtqz.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/La_D%C3%A9fense.a_eocwn5.jpg' },
    { categorie: 'Architectures', name: 'La Défense B', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696054/Portfolio%20Maxime%20Turpault/Architectures/La_D%C3%A9fense.b_rm17sj.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/La_D%C3%A9fense.b_yxdt7m.jpg' },
    { categorie: 'Architectures', name: 'La Défense C', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696054/Portfolio%20Maxime%20Turpault/Architectures/La_D%C3%A9fense.c_o2ybrh.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/La_D%C3%A9fense.c_tkj9wm.jpg' },
    { categorie: 'Architectures', name: 'La Défense D', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696055/Portfolio%20Maxime%20Turpault/Architectures/La_D%C3%A9fense.d_w07sk5.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697148/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/La_D%C3%A9fense.d_eyv1zq.jpg' },
    { categorie: 'Architectures', name: 'La Défense E', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696055/Portfolio%20Maxime%20Turpault/Architectures/La_D%C3%A9fense.e_kry1t6.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697149/Portfolio%20Maxime%20Turpault/Architectures/Miniatures/La_D%C3%A9fense.e_hfta4m.jpg' },
    { categorie: 'Paysages', name: 'Bois', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696147/Portfolio%20Maxime%20Turpault/Paysages/Bois_c2cuxm.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697225/Portfolio%20Maxime%20Turpault/Paysages/Miniatures/Bois_ajfqez.jpg' },
    { categorie: 'Paysages', name: 'Marée Basse', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696147/Portfolio%20Maxime%20Turpault/Paysages/Mar%C3%A9e_basse_opevov.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697225/Portfolio%20Maxime%20Turpault/Paysages/Miniatures/Mar%C3%A9e_basse_fuhqrz.jpg' },
    { categorie: 'Paysages', name: 'Fils et Bois', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696147/Portfolio%20Maxime%20Turpault/Paysages/Fils_et_bois_e145lg.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697225/Portfolio%20Maxime%20Turpault/Paysages/Miniatures/Fils_et_bois_kaokia.jpg' },
    { categorie: 'Paysages', name: 'Fils', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696146/Portfolio%20Maxime%20Turpault/Paysages/Fils_bcxqxi.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656697225/Portfolio%20Maxime%20Turpault/Paysages/Miniatures/Fils_cy67fb.jpg' },
    { categorie: 'Portraits', name: 'Silhouette A', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696128/Portfolio%20Maxime%20Turpault/Portraits/Silhouette.a_epx6gt.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696981/Portfolio%20Maxime%20Turpault/Portraits/Miniatures/Silhouette.a_ul7m0o.jpg' },
    { categorie: 'Portraits', name: 'Silhouette B', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696128/Portfolio%20Maxime%20Turpault/Portraits/Silhouette.b_j0zrtl.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696981/Portfolio%20Maxime%20Turpault/Portraits/Miniatures/Silhouette.b_d9fo3x.jpg' },
    { categorie: 'Portraits', name: 'Silhouette C', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696128/Portfolio%20Maxime%20Turpault/Portraits/Silhouette.c_ft6bca.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696981/Portfolio%20Maxime%20Turpault/Portraits/Miniatures/Silhouette.c_zucr32.jpg' },
    { categorie: 'Portraits', name: 'Surveillant A', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696129/Portfolio%20Maxime%20Turpault/Portraits/Surveillant.a_je6q4q.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696981/Portfolio%20Maxime%20Turpault/Portraits/Miniatures/Surveillant.a_kwjiui.jpg' },
    { categorie: 'Portraits', name: 'Surveillant B', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696129/Portfolio%20Maxime%20Turpault/Portraits/Surveillant.b_j398hx.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696981/Portfolio%20Maxime%20Turpault/Portraits/Miniatures/Surveillant.c_lgk9bg.jpg' },
    { categorie: 'Portraits', name: 'Surveillant C', img: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696129/Portfolio%20Maxime%20Turpault/Portraits/Surveillant.c_amuqww.jpg', miniatures: 'https://res.cloudinary.com/dktfcexev/image/upload/v1656696981/Portfolio%20Maxime%20Turpault/Portraits/Miniatures/Surveillant.b_zgrhfv.jpg' },
  ]

  for (let i = 0; i < photos.length; i++) {
    var newPhoto = new photoModel({
      categorie: photos[i].categorie,
      name: photos[i].name,
      img: photos[i].img,
      miniatures: photos[i].miniatures,
    });

    var photoSave = await newPhoto.save();
  }

  res.json({ photoSave });
});

router.get('/recupphoto', async function (req, res, next) {

  var photos = await photoModel.find();

  res.json({ photos })
});


router.post('/importpresentation', async function (req, res, next) {

  var presentations = [{
    photo: "https://res.cloudinary.com/dktfcexev/image/upload/v1656714403/Portfolio%20Maxime%20Turpault/Pr%C3%A9sentation/Miniature/DSC_9706_oipomz.jpg",
    presentation: "Je suis Maxime Turpault. Photographe et retoucheur en freelance, basé en Ile de France. Étudiant à l'école des Gobelins en Bachelor photo et vidéo",
    description: "Je suis passionné d'images depuis toujours, je vous invites à découvrir mon travail sur mon portfolio. Mes photographies ont un objectif artistique, ainsi que tous mes projets concernant l'image.",
  }]

  for (let i = 0; i < presentations.length; i++) {

    var newPresentation = new presentationModel({
      photo: presentations[i].photo,
      presentation: presentations[i].presentation,
      description: presentations[i].description,
    });
  }

  var presentationSave = await newPresentation.save();

  res.json({ presentationSave });
});

router.get('/recuppresentation', async function (req, res, next) {

  var presentation = await presentationModel.find();

  res.json({ presentation })
});

module.exports = router;