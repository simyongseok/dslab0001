"use strict";

var express = require("express");
var router = express.Router();
var ctrl = require("./home.ctrl");
var boardCtrl = require("../board/board.ctrl");

//GET
router.get("/", ctrl.output.viewHome);
router.get("/login", ctrl.output.viewLogin);
router.get("/register", ctrl.output.viewRegister);
//GET (Board)
router.get("/board", boardCtrl.output.viewBoard);
router.get("/board/create", boardCtrl.output.viewCreate);

//POST
router.post("/login", ctrl.process.viewLogin);
router.post("/register", ctrl.process.viewRegister);
//POST (Board)
router.post("/board/create", boardCtrl.process.create);
// router.post("/edit", boardCtrl.process.edit);


module.exports = router;