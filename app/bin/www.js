"use strict";

var app = require("../app");
const logger = require("../src/config/logger");
var PORT = process.env.PORT;

app.listen(PORT, ()=>{
  logger.info(`${PORT}포트에서 서버가 기동되었습니다.`);
  // console.log("현재 폴더 경로 : " + __dirname + "  ||  현재 실행 파일 경로 : "+__filename);
});