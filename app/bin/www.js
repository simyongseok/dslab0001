"use strict";

var app = require("../app");
var PORT = process.env.PORT;

app.listen(PORT, ()=>{
  console.log("서버 기동");
  console.log("현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
});