"use strict";

var UserStorage = require("../../models/UserStorage");


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
    var id = req.body.id,
        password = req.body.password;

        var users = UserStorage.getUsers("id", "password");
        
        var response = {};

        //로그인 여부
        if(users.id.includes(id)){
          var idx = users.id.indexOf(id);

          //로그인 성공
          if(users.password[idx] === password){
            response.success = true;
            return res.json(response);
          }
        }

        //로그인 실패
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    // // console.log(req.body);
    },
  };
  


module.exports = {
  output, process,
};