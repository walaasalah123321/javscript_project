let text=document.querySelector("input")
let btn=document.querySelector(".btn")
let back=document.querySelector(".back")
let product =[]

let click=document.querySelector(".click button");
btn.onclick=function(){
    if(text.value.length != 0){
product.push(text.value)}
diplay()
    
    text.value=""

    let par=document.querySelectorAll(".par")
    par.forEach(item=>{
        
        item.addEventListener("click",function(){
                 item.classList.toggle("undarline")

            
        })
    })


}

click.onclick=function(){
    document.body.style.background='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +' )'
    
}



function diplay(){
    let table=[]
    for(let p=0;p<product.length;p++){
    table+=
    `
    <div class="flex">
                    <p class="par">${product[p]}</p>
                    <button onclick="delet(${p})"><i class="fas fa-trash"></i></button>
                </div>
     <hr>
    `

}

back.innerHTML=table
}

function delet(e){
    product.splice(e,1);
    diplay();
    let par=document.querySelectorAll(".par")

    par.forEach(item=>{
        
        item.addEventListener("click",function(){
                 item.classList.toggle("undarline")

            
        })
    })
    
}