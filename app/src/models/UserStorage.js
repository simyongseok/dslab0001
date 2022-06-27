"use strict"

class UserStorage {
  static #users = {
    id : ["성은", "용석", "동준"],
    password : ["111", "222", "333"],
    names : ["A", "B", "C"],
  };

  static getUsers(...fields){
    console.log(fields);
    var users = this.#users;
    var num = 0;
    var newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field]; 
      }
      return newUsers;
    },{});   
    console.log(newUsers) ;
    return newUsers;
  }
}

module.exports = UserStorage;