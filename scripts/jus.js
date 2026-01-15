var hui=document.querySelector("h1")//тут мы присаиваем сылку html кода h1 к переменой hui
hui.textContent="hi hi hi";//тут мы меняем содержимое 
let gjopa = "mitin";//кросто прописали локальную переменую

if (gjopa == "mipo") {
    alert("goo");
} else {
    alert("MIPOGO!!!");
}

function multiply(n1, n2) {
    
var rs = n1 * n2;

    return rs;
}
console.log(multiply(7,8));
/* мы саздаем фцнкуию и выводим её на консоль задав значение к переменым через параметры*/



document.querySelector("h1").onclick=function(){
    alert("хватит щёлкать");
}
/*тут мы создаем функцию в кторой привязано событие к нашей сылке*/



let my1=document.querySelector("img");
 my1.onclick=function(){

//my1.setAttribute("src","images/Visod2.300x300.jpg");
//для просто изменения картинки на другую
   

    var mySrc=my1.getAttribute("src"); // сделали перменую для просмотра атрибута scr
    if (mySrc == "images/Visod.300x300.jpg"){
        my1.setAttribute("src","images/Visod2.300x300.jpg");//меняем файл изображение
 }
else{
    my1.setAttribute("src","images/Visod.300x300.jpg");
}

//меняем картинки утда сюда (цикл)

};


let mybutton=document.querySelector("button");
let myheading=document.querySelector("h1");

function setUserName(){
   let myName=prompt("Пожалуйста веди имя....");//прописываем диолог
   localStorage.setItem("name",myName);//создание ключа продробно с сверху
   myheading.textContent="приветствую вас.."+myName;//меняем содержание заголовка
/*тут создаётся name  кторый прописал пользователь*/   
}
if(!localStorage.getItem("name")){ //(!)-не , в данном случии отсутствие ключа "name"
    setUserName();
    }else{
        let storedName=localStorage.getItem("name");
        myheading.textContent="приветствую.."+storedName+"  :)";
    
}

    mybutton.onclick=function(){ //запуск нашего button
    setUserName();
    };

