let head=document.getElementById("head")
let main=document.getElementById("main")
let button=document.getElementById("button")
let container=document.getElementById("container")
button.addEventListener("click",()=>{
    container.classList.toggle("dark")
})