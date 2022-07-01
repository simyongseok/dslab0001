"use strict";

var express = require("express");
var router = express.Router();
var ctrl = require("./home.ctrl");

//GET
router.get("/", ctrl.output.viewHome);
router.get("/login", ctrl.output.viewLogin);
router.get("/register", ctrl.output.viewRegister);

//POST
router.post("/login", ctrl.process.viewLogin);
router.post("/register", ctrl.process.viewRegister);




module.exports = router;