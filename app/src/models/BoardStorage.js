"use strict"

const { json } = require("body-parser");
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
        // const query_index = "SELECT MAX(num) FROM board";
        //   const contents_index = 0;
        //   db.query(query_index, (err,data)=> {
        //     if(err) return  console.log(err);
        //     // contents_index = data;
        //     console.log(data.num)
        //   });
        return new Promise((resolve, reject)=> {
          const query = "INSERT INTO board(num, id, subject, contents) VALUE ( (SELECT MAX(num) FROM board a)+1 ,?,?,?);";
          db.query(query,[newBoard.id, newBoard.subject, newBoard.contents],(err, data) => {
            if(err) reject(err);
            else resolve({success:true});
         });
        });
      }
  }

 
  


module.exports = BoardStorage;