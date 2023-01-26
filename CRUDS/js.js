let title=document.getElementById("title")

let price=document.getElementById("price")
let taxes=document.getElementById("taxes")
let ads=document.getElementById("ads")
let discount=document.getElementById("discount")
let total=document.getElementById("total")
let count=document.getElementById("count")
let catagory=document.getElementById("catagory")
let submit=document.getElementById("submit")
let deleteall=document.getElementById("deletall")
let c=-1
function gettotal(){
    if(price.value!=''){
    let result=+price.value + +taxes.value + +ads.value - +discount.value
    total.innerHTML=result
    total.style.background="green"
    }
    else{
        total.style.background="#9e1006"
        total.innerHTML=""

    }
}
let dataproduct= localStorage.getItem("product")? JSON.parse(localStorage.getItem("product")):[]
console.log(dataproduct)

submit.onclick=function(){
    let newobj={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        catagory:catagory.value.toLowerCase()
    }
    if(title.value!=''&&price.value!=''&&catagory.value!=""){

        if(submit.innerHTML=="creat"){
            for(let i=0;i<count.value;i++){
            

                dataproduct.push(newobj)
            }
        }   
        else{
        
            dataproduct[c]=newobj
            submit.innerHTML="clear"
            count.style.display="block"

        }
        clear()


    }   
    localStorage.setItem("product",JSON.stringify(dataproduct))
    showdata()
  

}
function clear(){
    title.value=""
    price.value=""
    ads.value=""
    taxes.value=""
    discount.value=""
    catagory.value=""
    count.value=""
    total.innerHTML=""


}
function showdata(){
    gettotal()

    let dt=document.querySelector(".tbody")
    let table=''
    for(let i=0;i<dataproduct.length;i++){
    table+=`
    <tr>
    <td>${i+1}</td>
    <td>${dataproduct[i].title}</td>
    <td>${dataproduct[i].price}</td>
    <td>${dataproduct[i].taxes}</td>
    <td>${dataproduct[i].ads}</td>
    <td>${dataproduct[i].discount}</td>
    <td>${dataproduct[i].total}</td>
    <td>${dataproduct[i].catagory}</td>

    <td><button class="updata" onclick=(updata(${i}))>updata</button></td>
    <td><button onclick="delet(${i})" class="delet">delete</button></td>
</tr>
    `
    }
    console.log((table))
    dt.innerHTML=table
    if(dataproduct.length >0){
        deleteall.innerHTML=
        `                        <button onclick="deletallitem()"> delete all (${dataproduct.length})</button>
        `    
    
    }
    else{
        deleteall.innerHTML=""
    }
   
    
    

}
function deletallitem(){
    localStorage.product="" // localstorage.clear()
    dataproduct=[]  //dataproduct.splice(0)
    showdata()
}
function delet(i){
dataproduct.splice(i,1)
localStorage.product=JSON.stringify(dataproduct)
showdata()
}
console.log(dataproduct)
showdata()

function updata(i){
    title.value=dataproduct[i].title
    ads.value=dataproduct[i].ads
    price.value=dataproduct[i].price
    taxes.value=dataproduct[i].taxes
    catagory.value=dataproduct[i].catagory
    discount.value=dataproduct[i].discount
    gettotal()
    count.style.display="none"
    submit.innerHTML="updata"
    c=i
    scroll({top:0,behavior:'smooth'})
    

}
function getsearchmood(id){

    let search=document.querySelector("#search")
    search.focus();
    

        if(id=="searchcatogary"){
            search.placeholder="search by catogary"
        }
        else{
            search.placeholder="search by title"

        }
        search.value=""
        showdata()
        
}
function searchdata(value){
    let table=''
    let dt=document.querySelector(".tbody")
    let search=document.querySelector("#search")

    for(let i=0;i<dataproduct.length;i++){

        if(search.placeholder=="search by catogary"){
                    if(dataproduct[i].catagory.includes(value.toLowerCase())){
                                table+=`
                        <tr>
                        <td>${i+1}</td>
                        <td>${dataproduct[i].title}</td>
                        <td>${dataproduct[i].price}</td>
                        <td>${dataproduct[i].taxes}</td>
                        <td>${dataproduct[i].ads}</td>
                        <td>${dataproduct[i].discount}</td>
                        <td>${dataproduct[i].total}</td>
                        <td>${dataproduct[i].catagory}</td>

                        <td><button class="updata" onclick=(updata(${i}))>updata</button></td>
                        <td><button onclick="delet(${i})" class="delet">delete</button></td>
                        </tr>
                            `

                    }
            }


        
        else{
                if(dataproduct[i].title.includes(value.toLowerCase())){
                        table+=`
                <tr>
                <td>${i+1}</td>
                <td>${dataproduct[i].title}</td>
                <td>${dataproduct[i].price}</td>
                <td>${dataproduct[i].taxes}</td>
                <td>${dataproduct[i].ads}</td>
                <td>${dataproduct[i].discount}</td>
                <td>${dataproduct[i].total}</td>
                <td>${dataproduct[i].catagory}</td>

                <td><button class="updata" onclick=(updata(${i}))>updata</button></td>
                <td><button onclick="delet(${i})" class="delet">delete</button></td>
                </tr>
                    `

            }
        }
        dt.innerHTML=table


    }


}