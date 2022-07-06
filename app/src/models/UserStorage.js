"use strict"

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id){
    return new Promise((resolve, reject)=> {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query,[id],(err, data) => {
         if(err) reject(err);
      resolve(data[0]);
      console.log(data[0]);
     });
    });
  }

  static async save(userInfo){
    return new Promise((resolve, reject)=> {
      const query = "INSERT INTO users(id, name, password) VALUE (?,?,?);";
      db.query(query,[userInfo.id, userInfo.name, userInfo.password],(err, data) => {
         if(err) reject(err);
      resolve({success:true});
     });
    });
  }
  }



module.exports = UserStorage;