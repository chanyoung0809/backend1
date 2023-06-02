document.querySelector("body").style.backgroundColor="#FA0";

$(function(){
    //제이쿼리 시작 구문
    $(".menu > li").on("click", function(){
        //제이쿼리에서 화살표함수 사용하면 this 못잡음
        $(this).css({"background-color":"#FFF"},{'color':"#A00"})
        alert("clicked")
    })
});