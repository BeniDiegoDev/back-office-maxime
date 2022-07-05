var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.post('/importprofil', async function (req, res, next) {

//   var admin = [
//     {
//       user: "",
//       firstName: "",
//       lastName: "",
//       society: "",
//       email: "",
//       emailPro: "",
//       password: "",
//       address: "",
//       phoneNumber: "",
//       web: "",
//       instagram: "",
//       facebook: "",
//     },
//   ]

//   for (let i = 0; i < admin.length; i++) {
//     var newAdmin = new userModel({
//       token: uid2(32),
//       user: admin[i].user,
//       firstName: admin[i].firstName,
//       lastName: admin[i].lastName,
//       society: admin[i].society,
//       email: admin[i].email,
//       emailPro: admin[i].emailPro,
//       password: bcrypt.hashSync(admin[i].password, 10),
//       address: admin[i].address,
//       phoneNumber: admin[i].phoneNumber,
//       web: admin[i].web,
//       instagram: admin[i].instagram,
//       facebook: admin[i].facebook,
//     });

//     var adminSave = await newAdmin.save();
//   }

//   res.json({ adminSave });
// });

module.exports = router;
