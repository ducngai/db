const menuBar = document.querySelector("#show-menu")
menuBar.addEventListener("click",function(){
    document.querySelector(".header-menu").style.transform = "translateX(0%)"
})
const closeBar = document.querySelector("#hide-menu")
closeBar.addEventListener("click",function(){
    document.querySelector(".header-menu").style.transform = "translateX(100%)"
})