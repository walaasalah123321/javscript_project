
let user_name=document.querySelector("#username")
let password=document.querySelector("#pass")
let sign_up=document.querySelector("#sign")

sign_up.addEventListener("click",function(e){
    if(user_name.value==="" ||password.value===""){
        alert("please enter every data")
    }
    else {
        if(user_name.value===localStorage.getItem("username") ||password.value===localStorage.getItem("password"))
        setTimeout(()=>{
            window.location="index.html"
        },1500)

    }
})