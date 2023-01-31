 let removeuser = document.querySelector(".removeuser")
 let domuser = document.querySelector(".user-info")
 let user = document.querySelector(".users")
 let signout=document.querySelector(".signout")
 if(localStorage.getItem("username")){
    removeuser.remove()
    domuser.style.display = "flex"

    user.innerHTML=localStorage.getItem("username")
 }

 signout.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="login.html"
    },1500)
 })
 let product=[
    {
        id:1,
        title:"NIVEA" ,
        size:"large" ,
        url:("NIVEA.jpg"),
        qunt:1
    },
    
    {
        id:2,
        title:"diplay" ,
        size:"large" ,
        url:("ART.jpg"), qunt:1
    }, {
        id:3,
        title:"ARTl" ,
        size:"small" ,
        url:("play.jpg"), qunt:1
    }
 ]

 if(localStorage.getItem("allproduct")==null)
 localStorage.setItem("allproduct",JSON.stringify(product))

 
 let bro=document.querySelector(".product")
 function diplay(){
    let allproduct=JSON.parse(localStorage.getItem("allproduct"))

    bro.innerHTML= allproduct.map((item)=>{
       return `
        <div class="product-item">
        <img class="product-img" src="${item.url}">
        <div>
            <h3 onclick=direct(${item.id})>${item.title}</h3>
            <p>the THIRD product can you buy it</p>
            <span>${item.size}</span>
        </div>
        <div class="right">
            <button class="add_to_card" onclick=additem(${item.id})>Add To Card</button>
            <i class="fa-regular fa-heart" style="color: ${ item.liked == true ? "red" :"black"} " onclick=favorite(${item.id})></i>
        </div>
    </div>
        `
    }).join("")


 }
 let icon=document.querySelector(".fa-heart")

 let favoriteitem=localStorage.getItem("fav")? JSON.parse(localStorage.getItem('fav')):[]

 function favorite(ids){
    if(localStorage.getItem("username")){

    let chose=product.find((it)=> it.id==ids)
   

    favoriteitem=[...favoriteitem,chose]
    let res=    getunqiu(favoriteitem,"id")

    localStorage.setItem("fav",JSON.stringify(res))
    let allproduct=JSON.parse(localStorage.getItem("allproduct"))

    allproduct.forEach((item)=>{
        if(item.id==chose.id){
            if(item.liked){
            if(item.liked==true)
            item.liked=false
            else item.liked=true}
            else item.liked=true 
        }

        
     })
     localStorage.setItem("allproduct",JSON.stringify(allproduct))
     localStorage.setItem("fav",JSON.stringify(allproduct))

     diplay()

     
}
else window.location="login.html"
}
 let datasate=localStorage.getItem("productus") ? JSON.parse(localStorage.getItem("productus")):[]
 console.log(datasate)

 let apper=document.querySelector(".adds")
 let badge=document.querySelector(".badge")
 
 console.log(badge.style.display)
 let allitem=localStorage.getItem("productus") ? JSON.parse(localStorage.getItem("productus")):[]
 function additem(ids){
    if(localStorage.getItem("username")){

    let chose=product.find((it)=> it.id==ids)
    let get=allitem.find(i=>i.title==chose.title)
    if(get){
        get.qunt+=1;
    }
    else {
        allitem.push(chose)
    }
    datasate=[...datasate,chose]
    let res=    getunqiu(datasate,"id")
localStorage.setItem("productus",JSON.stringify(res))
    apper.innerHTML=''
    allitem.forEach((item)=>{
        
    apper.innerHTML+=

    `  <p class="pro">${item.title} x${item.qunt}</p>`

    })
    badge.style.display="block"
    badge.innerHTML=datasate.length;
    }else window.location="login.html"
 }
 
 
function getunqiu(arr,filteritem){
    let unque=arr.map(item=>item[filteritem]).map((item,i,final)=>final.indexOf(item)===i&&i).filter(item=>arr[item]).map(item=>arr[item])
return unque
}

 diplay()
 let card=document.querySelector(".icon_user")
 let items=document.querySelector(".product-items")
 card.addEventListener("click",function(){

    if(datasate!=0){

        if(items.style.display=="none")
    items.style.display = "block"
    else     items.style.display = "none"

    }
 })
 
 if(datasate){
    datasate.map(items=>{
        apper.innerHTML+=    `  <p class="pro">${items.title} x${items.qunt}</p>`

    })
    badge.style.display="block"
    badge.innerHTML=datasate.length;

 }
 function direct(item){
    localStorage.setItem("showproduct",item)
    window.location="cart.html"
  }
  let inputed=document.querySelector(".input_text")
  let ptn=JSON.parse( localStorage.getItem("allproduct"));
  function search(itemed,ptn){
    let result=ptn.filter((items)=> items.title.indexOf(itemed)!=-1)
    bro.innerHTML=result.map((item)=>{
        return `
         <div class="product-item">
         <img class="product-img" src="${item.url}">
         <div>
             <h3 onclick=direct(${item.id})>${item.title}</h3>
             <p>the THIRD product can you buy it</p>
             <span>${item.size}</span>
         </div>
         <div class="right">
             <button class="add_to_card" onclick=additem(${item.id})>Add To Card</button>
             <i class="fa-regular fa-heart" onclick=favorite(${item.id})></i>
         </div>
     </div>
         `
     })
  }
  inputed.addEventListener("keyup",function(e){
    search(inputed.value,ptn )
  });

 


  
