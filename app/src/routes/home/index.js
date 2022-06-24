"use strict";

var express = require("express");
var router = express.Router();

var ctrl = require("./home.ctrl");

router.get("/", ctrl.View_home);
router.get("/login", ctrl.View_login);

module.exports = router;