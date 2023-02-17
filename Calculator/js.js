let click=document.querySelectorAll("button")
let text=document.querySelector(".text")
click.forEach(item => {
    item.onclick=function(){
        if(item.innerHTML=="C"){
            text.value=" "

        }
        else if(item.innerHTML=="DEl"){
            let values=(text.value)
            text.value=values.slice(0,values.length-1)
        }
        else if(item.innerHTML=="="){
            if(text.value.length==0){
                    text.value=0
            }
            let result=eval(text.value)
            text.value=result            
        }
        else if(item.innerHTML=="%"){
            let result=(text.value)/100
            text.value=result   
        }
        else{
            text.value+=item.innerHTML
            console.log(text.value)

        }

    }
    
});