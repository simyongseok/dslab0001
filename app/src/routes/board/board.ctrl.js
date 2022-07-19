"use strict";

const { json } = require("body-parser");
const Board = require("../../models/Board");
const logger = require("../../config/logger");

const output = {
  viewBoard: async (req, res) => {
    const boardList = new Board(req.body);
    const response = await boardList.list();
    if(response.success){
    logger.info(`GET / 304 "게시판 메인홈 화면으로 이동`);
    res.render("board/list",{success :response.success, boardList : response.MboardList});
      }
    else{
    logger.error(`GET / 304 "게시판 등록글 없음`);
    res.render("board/list",{success :response.success, boardList : response.msg});
      }
  },
  viewCreate: async (req, res) => {
      res.render("board/create");
  },
    
};
const process = {
    create: async (req, res) => {
      const user = new Board(req.body);
      const response = await user.create();
      const url = {
        method: "POST",
        path: "/register",
        //err 나오면 400 아니면 304
        status: response.err ? 409 : 201,
      };
      log(response, url);
      return res.json(response);
      },

      edit: async (req, res) => {
        const user = new Board(req.body);
        const response = await user.login();
        const url = {
          method: "POST",
          path: "/board/create",
          status: response.err ? 400 : 201,
        };
        log(response,url);
        return res.json(response);
        },
  };
  
module.exports = {
  output,
  process,
};

const log =(response, url) =>{
  if(response.err){
  logger.error(
    `${url.method} ${url.path} ${url.status} Response : ${response.success}  ${response.err}"`
    );    
  }
  else{  
  logger.info(
    `${url.method} ${url.path} ${url.status} Response : ${response.success}  ${response.msg
      || "" }"`
    );
  }
}