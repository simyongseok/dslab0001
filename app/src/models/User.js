"use strict"

const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body = body;
  }

  async login(){
    const client = this.body;
    const {id, password} = await UserStorage.getUserInfo(client.id);
    
    if(id){
      if(id === client.id && password === client.password){
        return { success: true, msg:"로그인 되었습니다."}
      }
      return { success: false, msg:"비밀번호가 일치하지 않습니다."}
    }
    return { success: false, msg:"존재하지 않는 아이디입니다.."}
   }

  register(){
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  //   if(id){
  //     if(id === client.id && password === client.password){
  //       return { success: true, msg:"성공적으로 가입 되었습니다."}
  //     }
  //     return { success: false, msg:"비밀번호가 일치하지 않습니다."}
  //   }
  //   return { success: false, msg:"존재하지 않는 아이디입니다.."}
  // }
  }
}

module.exports = User;