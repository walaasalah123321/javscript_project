let bro=document.querySelector(".product")
let num=document. querySelector(".adds")
let badge=document.querySelector(".badge")

 function diplay(){
   loc=localStorage.getItem("fav")

loc=JSON.parse(loc)
    if(loc){
    bro.innerHTML=loc.map((item)=>{
        if(item.liked==true){
       return `
        <div class="product-item">
        <img class="product-img" src="${item.url}">
        <div>
            <h3 onclick=direct(${item.id})>${item.title}</h3>
            <p>the THIRD product can you buy it</p>
            <span>${item.size}</span>
        </div>
        <div class="right">
        <button class="add_to_card" onclick=removefrom(${item.id})>Remove from fav</button>
</div>
    </div>
   
             `}
    })
}}
     
 function direct(item){
   localStorage.setItem("showproduct",item)
   window.location="cart.html"
 }
 diplay()

function removefrom(item1){
  
   loc=JSON.parse(localStorage.getItem("fav"))
  let att=  loc.filter((item) =>item.id !==item1) 
  
  localStorage.setItem("fav",JSON.stringify(att))
  diplay()
}

 let signout=document.querySelector(".signout")

 signout.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="login.html"
    },1500)
 })
 let removeuser = document.querySelector(".removeuser")
 let domuser = document.querySelector(".user-info")
 let user = document.querySelector(".users")
 if(localStorage.getItem("username")){
    removeuser.remove()
    domuser.style.display = "flex"

    user.innerHTML=localStorage.getItem("username")
 }
 



 let card=document.querySelector(".icon_user")
 let items=document.querySelector(".product-items")

 card.addEventListener("click",function(){

    if(loc){

        if(items.style.display=="none")
    items.style.display = "block"
    else     items.style.display = "none"

    }
   

 })

