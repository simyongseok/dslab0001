"use strict"

const { cli } = require("winston/lib/winston/config");
const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body = body;
  }

  async login(){
    const client = this.body;
    try{
      // await UserStorage.getUserInfo(client.id);
      const user = await UserStorage.getUserInfo(client.id);
      
      // console.log(JSON.stringify(user.id));

      if(user){
        if(user.id === client.id && user.password === client.password){
          return { success: true, msg:"로그인 되었습니다."};
        }
        return { success: false, msg:"비밀번호가 일치하지 않습니다."};
      }
      return { success: false, msg:"존재하지 않는 아이디입니다.."};
    }
    catch(err){
      return {success : false, err};
    }
  
   }

  async register(){
    const client = this.body;
    try{
      const response = await UserStorage.save(client);
      return response;  
    }catch(err){
      return {success:false, err};
  }
 }
}

module.exports = User;