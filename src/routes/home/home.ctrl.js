"use strict";

var View_home = (req, res) => {
  res.render("home/index");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
}

var View_login = (req, res) => {
  res.render("home/login");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
}


module.exports = {
  View_home, View_login
};