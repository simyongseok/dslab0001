"use strict";

const { json } = require("body-parser");
const User = require("../../models/User");


const output = {
viewHome: (req, res) => {
  res.render("home/index");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },

viewLogin: (req, res) => {
  res.render("home/login");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },

viewRegister: (req, res) => {
  res.render("home/register");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },
}

const process = {
  viewLogin: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
    },
  viewRegister: async (req, res) => {
      const user = new User(req.body);
      const response = await user.register();
      return res.json(response);
      },
  };
  
module.exports = {
  output, 
  process,
};

