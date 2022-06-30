"use strict";

var express = require("express");
var router = express.Router();

var ctrl = require("./home.ctrl");

router.get("/", ctrl.output.viewHome);
router.get("/login", ctrl.output.viewLogin);
router.get("/register", ctrl.output.viewRegister);
router.post("/login", ctrl.process.viewLogin);



module.exports = router;