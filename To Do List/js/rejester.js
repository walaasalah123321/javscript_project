
let username=document.querySelector("#username")
let pass=document.querySelector("#pass")
let sign=document.querySelector("#sign")

sign.addEventListener("click",function(e){
    if(username.value==="" ||pass.value===""){
        alert("please enter every data")
    }
    else {
        localStorage.setItem("username",username.value)
        localStorage.setItem("password",pass.value)
        setTimeout(()=>{
            window.location="login.html"
        },1500)

    }
})
