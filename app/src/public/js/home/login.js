"use strict"

//html 메소드랑 연결 #을 붙히면 ID의 값(<input id="password")이랑 연결, 그냥 button으로 쓰면 메서드 이름이랑 연결(<button>)
var id = document.querySelector("#id"),
 password = document.querySelector("#password"),
 loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
  var req = {
    id: id.value,
    password : password.value,
  };
  // console.log(req);
  // console.log(JSON.stringify(req));
  //stringify 데이터 오브젝트를 스트링으로 바꿔줌

  fetch("/login", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => console.log(res)); //.then(console.log); 이랑 동일
}


 console.log(id);
 console.log("hello");