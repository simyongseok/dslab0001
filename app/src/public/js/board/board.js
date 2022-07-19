"use strict"

//ejs에서 어떤 동작을 처리하는 라우터 역할의 JS
//html 메소드랑 연결 #을 붙히면 ID의 값(<input id="password")이랑 연결, 그냥 button으로 쓰면 메서드 이름이랑 연결(<button>)
var subject = document.querySelector("#subject"),
    contents = document.querySelector("#contents"),
    passwordConfirm = document.querySelector("#password-confirm"),
    createBtn = document.querySelector("#createbtn");
    

createBtn.addEventListener("click",create);

function create(){

  var req = {
    subject: subject.value,
    contents : contents.value,
    passwordConfirm : passwordConfirm.value,
  };

  console.log(req);
  
  fetch("/board/create", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  //결과값 로그 .then((res) => console.log(res)); //.then(console.log); 이랑 동일
  .then((res) => {
    if(res.success){
        location.href = "/board";  
      }
      else{
      location.href = "/board/create";
      }
  })
  .catch((err) => {
    console.error(new Error("게시판 생성 중 에러 발생"));
  });
}

