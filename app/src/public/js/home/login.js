"use strict"


var id = document.querySelector("#id"),
 password = document.querySelector("#password"),
 loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
  var req = {
    id: id.value,
    password : password.value,
  };
  console.log(req);
}

 console.log(id);
 console.log("hello");