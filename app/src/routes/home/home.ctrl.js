"use strict";

const { json } = require("body-parser");
const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
viewHome: (req, res) => {
  logger.info(`GET / 304 "홈 화면으로 이동`);
  res.render("home/index");
  // console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },

viewLogin: (req, res) => {
  logger.info(`GET /login 304 "로그인 화면으로 이동`);
  res.render("home/login");
  // console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },

viewRegister: (req, res) => {
  logger.info(`GET /register 304 "회원가입 화면으로 이동`);
  res.render("home/register");
  // console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },
}

const process = {
  viewLogin: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 201,
    };
    log(response,url);
    return res.json(response);
    },
    
  viewRegister: async (req, res) => {
      const user = new User(req.body);
      const response = await user.register();
      const url = {
        method: "POST",
        path: "/register",
        //err 나오면 400 아니면 304
        status: response.err ? 409 : 201,
      };
      log(response, url);
      return res.json(response);
      },
  };
  
module.exports = {
  output, 
  process,
};

const log =(response, url) =>{
  if(response.err){
  logger.error(
    `${url.method} ${url.path} ${url.status} Response : ${response.success}  ${response.err}"`
    );    
  }
  else{  
  logger.info(
    `${url.method} ${url.path} ${url.status} Response : ${response.success}  ${response.msg
      || "" }"`
    );
  }
}