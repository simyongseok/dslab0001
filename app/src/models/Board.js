"use strict"

const { cli } = require("winston/lib/winston/config");
const BoardStorage = require("./BoardStorage");

class Board{
  constructor(body){
    this.body = body;
  }
  async list(){
    // const client = this.body;
    try{
      const MboardList = await BoardStorage.listGet();
      // console.log(JSON.stringify(MboardList));
      if(!MboardList){
        return {success : false, msg:"등록된 게시물이 없습니다."};
      }
      else{
        return {success : true, MboardList : MboardList};
      }
    }
    catch(err){
      return {success : false, err};
    }
   }
   //Create
   async create(){
    const client = this.body;
    try{
      if(!client.subject){
        return { success: false, msg:"제목을 입력해주세요."};
      }
      else if(!client.contents){
        return { success: false, msg:"패스워드를 입력해주세요."};
      }
      else {
        const response = await BoardStorage.create(client);
        return response;  
      }
    }catch(err){
      return {success:false, err};
    }
   }
}
module.exports = Board;