"use strict"

//html 메소드랑 연결 #을 붙히면 ID의 값(<input id="password")이랑 연결, 그냥 button으로 쓰면 메서드 이름이랑 연결(<button>)
const id = document.querySelector("#id"),
      user = document.querySelector("#name"),
      password = document.querySelector("#password"),
      passwordConfirm = document.querySelector("#password-confirm"),
      registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){

  if(!id.value) return alert("아이디를 입력해주세요.");
  if(password.value !== passwordConfirm.value) return alert("입력한 비밀번호가 다릅니다.");

  console.log(" sdgasdgasd");

  var req = {
    id: id.value,
    name: user.value,
    password : password.value,
    passwordConfirm : passwordConfirm.value,
  };
  console.log(req);

  //stringify 데이터 오브젝트를 스트링으로 바꿔줌
  //console.log(JSON.stringify(req));

  fetch("/register", {
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
      location.href = "/login";
      alert(res.msg);
    }
    else{
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중 에러 발생"));
  });
}


 