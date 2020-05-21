var express = require("express");
var router = express.Router();
var controller = require("../controllers/auth.controller");

/* GET auth info. */

router.post("/signup", controller.signup);

router.post("/signin", controller.signin);

router.post("/signout", controller.signout);

router.get("/getuser", controller.getuser);

module.exports = router;
