let button = document.getElementById("button");
let close = document.getElementById("close");
let container = document.getElementById("container");
let chữ = document.getElementById("chữ");

button.addEventListener("click",()=>{
    chữ.style.display="block"
    chữ.style.backgroundColor="white"
    container.style.backgroundColor="gray"
})
close.addEventListener("click",()=>{
    chữ.style.display="none"
    container.style.backgroundColor="white"
})