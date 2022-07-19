"use strict"

const db = require("../config/db");

class BoardStorage {
      static listGet(){
        return new Promise((resolve, reject)=> {
          const query = "SELECT * FROM board ORDER BY num;";
          db.query(query,(err, data) => {
            if(err) reject(`${err}`);
            else resolve(data); 
         });
        });
      }

      static async create(newBoard){
        return new Promise((resolve, reject)=> {
          const query = "INSERT INTO board(id, subject, contents) VALUE (?,?,?);";
          db.query(query,['test',newBoard.subject, newBoard.contents],(err, data) => {
            if(err) reject(err);
            else resolve({success:true});
         });
        });
      }
  }

 
  


module.exports = BoardStorage;