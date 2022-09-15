let btns = document.querySelectorAll(".page9Btns");
// let foto = "../images/phone-call.png";

let foto1Page9 = document.querySelector(".foto9_1");
let foto2Page9 = document.querySelector(".foto9_2");
let foto3Page9 = document.querySelector(".foto9_3");

let names = document.querySelectorAll(".name");

let prices = document.querySelectorAll(".price");
function createBox(url1, name1, price1, url2, name2, price2, url3, name3, price3) {

foto1Page9.style.backgroundImage = url1;
foto2Page9.style.backgroundImage = url2 ;
foto3Page9.style.backgroundImage = url3;

names[0].innerHTML = name1;
names[1].innerHTML = name2;
names[2].innerHTML = name3;

prices[0].innerHTML = price1;
prices[1].innerHTML = price2;
prices[2].innerHTML = price3;




}   
btns[0].addEventListener("click",()=>{
    createBox("url(http://localhost:8080/82d27267a151a587e449.jpg)", "Ittalian Pizza", "$2.90", 
              "url(http://localhost:8080/2f633cad4121ab52b733.jpg)", "Ittalian Pizza", "$2.90",
              "url(http://localhost:8080/a0a8c7f461c5eff2c8d5.jpg)", "Ittalian Pizza", "$2.90")
});
btns[1].addEventListener("click",()=>{
    createBox("url(http://localhost:8080/c12f72cf2657179885f2.jpg)", "Tanqueray", "$55.90", 
              "url(http://localhost:8080/d09561bafa42df0b0729.jpg)", "Bacardi", "$44.20",
              "url(http://localhost:8080/d6e9effa3306d8c6f0d7.jpg)", "Johnnie Walker", "$32.30")
});
btns[2].addEventListener("click",()=>{
    createBox("url(http://localhost:8080/fd28778db8e226a5e1ef.jpg)", "Big Tasty", "$5.90", 
              "url(http://localhost:8080/b0970d1c918f9587053a.jpg)", "BigMac", "$4.20",
              "url(http://localhost:8080/9ed9b6785140b52bbe9d.jpg)", "Cheesburger", "$2.30")
});
btns[3].addEventListener("click",()=>{
    createBox("url(http://localhost:8080/6d74a4bbd8f8bbf619b3.jpg)", "Pasta Carbonara" , "$3.20", 
              "url(http://localhost:8080/4b79dffbcda2bca1fa93.jpg)", "Pasta Pora", "$2.41",
              "url(http://localhost:8080/0f3ff73cb39e3ede3b73.jpg)", "Pasta Gora", "$12.32")
}); 