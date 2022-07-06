"use strict"

const db = require("../config/db");

class UserStorage {
  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, password, name] 키값으로만으로 배열을 만듬
    const userInfo  = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});
    return userInfo;
  }
  static #getUsers(data, isAll, fields){
    const users = JSON.parse(data);
    if(isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){
          newUsers[field] = users[field]; 
        }
        return newUsers;
      },{});   
      console.log(newUsers) ;
      return newUsers;
  }

  static getUsers(isAll, ...fields){
   
  }

  static getUserInfo(id){
    return new Promise((resolve, reject)=> {
      db.query("SELECT * FROM users WHERE id = ?",[id],(err, data) => {
         if(err) reject(err);
      resolve(data[0]);
      console.log(data[0]);
     });
    });
  }

  static async save(userInfo){
    // const users = await this.getUsers("id", "password", "names");
    // const users = await this.getUsers(true);
    // if(users.id.includes(userInfo.id)){
    //   throw "이미 존재하는 아이디입니다.";
    // }
    
    
    //   users.id.push(userInfo.id);
    //   users.password.push(userInfo.password);
    //   users.names.push(userInfo.name);
    //   fs.writeFile("./src/database/dslab/users.json", JSON.stringify(users));
    //   return { success : true};
    
    //   console.log(users);
    // return users;
  }

}

module.exports = UserStorage;