const mysql = require("mysql");

const db = mysql.createConnection({
  host : "dslab.c5psch9lyirr.ap-northeast-2.rds.amazonaws.com",
  user : "admin",
  password : "admin!23",
  database : "dslab_001",
});

db.connect();

module.exports = db;

