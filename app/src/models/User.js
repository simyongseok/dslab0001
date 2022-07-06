"use strict"

const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body = body;
  }

  async login(){
    const client = this.body;
    try{
      if(!client.id) return { success: false, msg:"아이디를 입력해주세요."};
    
      // await UserStorage.getUserInfo(client.id);
      const {id, password} = await UserStorage.getUserInfo(client.id);
        
      if(id){
        if(id === client.id && password === client.password){
          return { success: true, msg:"로그인 되었습니다."}
        }
        return { success: false, msg:"비밀번호가 일치하지 않습니다."}
      }
      return { success: false, msg:"존재하지 않는 아이디입니다.."}
    }
    catch(err){
      return {success : false, msg:err};
    }
  
   }

  async register(){
    const client = this.body;
    try{
      const response = await UserStorage.save(client);
      return response;  
    }catch(err){
      return {success:false, msg: err};
  }
 }
}

module.exports = User;