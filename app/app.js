"use strict";
//Module
const Adminbro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
var express = require('express');
var bodyParser = require('body-parser');
const dotenv = require("dotenv");

//환경변수 모듈 동작
dotenv.config();
var app = express();

//admin-bro
const adminBro = new Adminbro({
  //  database : [],
   rootPath: '/admin',
});
const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

//Routing
var home = require('./src/routes/home'); 


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