let text=document.querySelectorAll("input")
console.log(text)
let result=document.querySelector(".result")
let par=document.querySelector(".par")
result.onclick=function(){
    let sum=0;
    let avarge=0
    let r=0;

    text.forEach(item=>{
        if(item.value.length==0){
            alert("pleace enter "+item.placeholder)
        }
        else{
        sum+=(+item.value); r++;}
    })
    if(r==5){
    avarge=sum/500*100;
    if(avarge>=90){
        flag="A you are pass "
    }
    else if (avarge>=80){
        flag="B  you are pass "
    }
    else if (avarge>=70){
        flag="C you are pass "
    }
    else if (avarge>=60){
        flag="D you are pass "
    }
    else{
        flag="F you are failed "
    }
    let ph=`
    <p> your marks ${sum} out of 500</p>
    <p> your percentage is ${avarge} %</p>
    <p> your grade is ${flag} </p>

    
    `
par.innerHTML=ph
    }

}
