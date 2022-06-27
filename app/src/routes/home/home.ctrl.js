"use strict";

var users = {
  id : ["성은", "용석", "동준"],
  password : ["111", "222", "333"],
};

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
    
        if(users.id.includes(id)){
          var idx = users.id.indexOf(id);
          if(users.password[idx] === password){
            return res.json({
              success:true,
            });
          }
        }

        return res.json({
          success: false,
          msg: "로그인에 실패하였습니다.",
        });
    console.log(req.body);
    },
  };
  


module.exports = {
  output, process,
};