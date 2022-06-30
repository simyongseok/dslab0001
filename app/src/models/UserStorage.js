"use strict"

class UserStorage {
  static #users = {
    id : ["성은", "용석", "동준"],
    password : ["111", "222", "333"],
    names : ["A", "B", "C"],
  };

  static getUsers(...fields){
    console.log(fields);
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, password, name] 키값으로만으로 배열을 만듬
    const userInfo  = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});
    console.log(userInfo);

    return userInfo;
  }
}

module.exports = UserStorage;