"use strict";

var output = {
viewHome: (req, res) => {
  res.render("home/index");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },

viewLogin: (req, res) => {
  res.render("home/login");
  console.log("입력 URL : " + req.url +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
  },
}


var process = {
  viewLogin: (req, res) => {
    console.log(req.body);
    // console.log("입력 URL : " + req.body +"  ||  현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
    },
  }
  


module.exports = {
  output, process,
};