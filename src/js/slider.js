let dots = document.querySelectorAll(".dot");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");

dots[0].addEventListener("click",()=>{
    page1.style.display = "flex"
    page2.style.display = "none"
    page3.style.display = "none"
});
dots[1].addEventListener("click",()=>{
    page1.style.display = "none"
    page2.style.display = "flex"
    page3.style.display = "none"
});
dots[2].addEventListener("click",()=>{
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "flex"

});
