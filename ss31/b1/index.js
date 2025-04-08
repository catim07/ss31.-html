let hide=document.getElementById("hide")
let show=document.getElementById("show")
let text=document.getElementById("text")
hide.addEventListener("click",()=>{
    text.style.display="none"
})
show.addEventListener("click",()=>{
    text.style.display="block"
})