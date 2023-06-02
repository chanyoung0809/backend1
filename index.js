const express = require("express") 
const app = express(); 

/*
라우터, db... 서버 프로그램 작성에 필요한 수많은 명령어들을 담고 있는 함수 express
(터미널에서 npm install express 해야 사용가능)
*/

// ejs 파일 형식을 node.js에서 사용하기 위한 시작구문
app.set("view engine", "ejs")
// 이미지, .css, .js등 정적 파일들을 ejs 파일 내에서 사용하기 위한 구문 
app.use(express.static('public'));

const port = 3000

app.listen(3000,()=>{
    console.log("서버가 잘 실행되고 있습니다.");
})
// app.listen(포트번호,()=>{
// console.log("서버가 잘 실행되고 있습니다.")   
// })

// 라우터 세팅
// 메인페이지 주소 요청하면 메인페이지 접속 완료라는 메세지를 응답받는다

// node index.js 실행 전 모든 라우터를 세팅해야 함(세팅 후에는 수정해도 수정사항 반영되지 않음). ctrlc 눌러서 서버 종료하고 재실행해야 함

// 실시간으로 반영되게 하려면? 
// -> 터미널 화면에서 부가 기능 중 nodemon을 설치해서 가면 
// node index.js 중간에 수정해도 수정사항 반영해서 보여줌
// -> nodemon index.js 입력 (이후 웹브라우저 새로고침하면 됨)

app.get("/", (req, res)=>{
    // 메인페이지 경로 요청 시 index.ejs를 랜더링해주세요.
    // 요청시 자동으로 views 폴더 찾아줌(대신 views 폴더 만들어서 그 안에 넣어야 함)
   res.render("index.ejs");
})
app.get("/sub", (req, res)=>{
    res.render("sub.ejs");
})
app.get("/first/intro", (req, res)=>{
    res.render("intro.ejs");
})

// app.get("주소경로", (매개변수 req(request: 요청), res(response: 응답))=>{
//    res.send("console같은 기능")
// })
// app.get("/sub", (req, res)=>{
//     res.send("서브페이지에 접속되었습니다.");
// })
