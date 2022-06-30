"use strict"

const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body = body;
  }

  login(){
    const body = this.body;
    const {id, password} = UserStorage.getUserInfo(body.id);

    if(id){
      if(id === body.id && password === body.password){
        return { success: true, msg:"로그인 되었습니다."}
      }
      return { success: false, msg:"비밀번호가 일치하지 않습니다."}
    }
    return { success: false, msg:"존재하지 않는 아이디입니다.."}
  }
}

module.exports = User;