"use strict"

const fs = require("fs").promises;

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

  static getUsers(...fields){
    console.log(fields);
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field]; 
      }
      return newUsers;
    },{});   
    console.log(newUsers) ;
    return newUsers;
  }

  static getUserInfo(id){
      return fs
    .readFile("./src/database/dslab/users.json")
    .then((data) => {    
      return this.#getUserInfo(data, id);
    })
    .catch(console.error);
  }

  static save(userInfo){
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.names.push(userInfo.name);
    users.password.push(userInfo.password);
    
    console.log(users);

    return users;
  }

}

module.exports = UserStorage;