"use strict";
//Module
var express = require('express');
var app = express();


//Routing
var home = require('./src/routes/home') 

//MVC setting
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드



module.exports = app;