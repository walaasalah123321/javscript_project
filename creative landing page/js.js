let imags=document.querySelectorAll(".icons img")
let logo=document.querySelector(".big")
let cont=document.querySelector(".cont")
console.log(cont)
imags.forEach(item=>{
    item.addEventListener("click",function(){
        logo.src=item.src
        cont.style.background=item.alt
        
        
    })
})