"use strict";
//Module
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//Routing
var home = require('./src/routes/home') 

//setting
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(__dirname+'/src/public'));
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드



module.exports = app;