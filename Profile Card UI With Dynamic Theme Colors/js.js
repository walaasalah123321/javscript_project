let btn=document.querySelectorAll(".btn")
let card=document.querySelector(".card")
let mas=document.querySelector(".massage")
let folow=document.querySelector(".follow")
btn.forEach(item=>{
    let h=document.querySelectorAll("h3")
    item.addEventListener("click",()=>{
        let color=item.classList;
        if (color.contains("btn1")) {
            card.style.background=`${"linear-gradient( to bottom ," + "#3498db "+ 120 + "px , " + "#ffffff "+ 120 + "px)"}`
            h.forEach(item=>{
                item.style.color="#3498db"
                mas.style.color="#3498db"
                mas.style.border="3px solid #3498db"
                folow.style.background="#3498db"
            })
        }
        else if (color.contains("btn2")) {
            card.style.background=`${"linear-gradient( to bottom ," + "#ff1756 "+ 120 + "px , " + "#ffffff "+ 120 + "px)"}`
            h.forEach(item=>{
                item.style.color="#ff1756"
                mas.style.color="#ff1756"
                mas.style.border="3px solid #ff1756"
                folow.style.background="#ff1756"
            })
        }
        else if (color.contains("btn3")) {
            card.style.background=`${"linear-gradient( to bottom ," + "#1cd56d "+ 120 + "px , " + "#ffffff "+ 120 + "px)"}`
            h.forEach(item=>{
                item.style.color="#1cd56d"
                mas.style.color="#1cd56d"
                mas.style.border="3px solid #1cd56d"
                folow.style.background="#1cd56d"
            })
        } 
        else if (color.contains("btn4")) {
            card.style.background=`${"linear-gradient( to bottom ," + "#8e44ad "+ 120 + "px , " + "#ffffff "+ 120 + "px)"}`
            h.forEach(item=>{
                item.style.color="#8e44ad"
                mas.style.color="#8e44ad"
                mas.style.border="3px solid #8e44ad"
                folow.style.background="#8e44ad"
            })
        } 
        else if (color.contains("btn5")) {
            card.style.background=`${"linear-gradient( to bottom ," + "#f4b932 "+ 120 + "px , " + "#ffffff "+ 120 + "px)"}`
            h.forEach(item=>{
                item.style.color="#f4b932"
                mas.style.color="#f4b932"
                mas.style.border="3px solid #f4b932"
                folow.style.background="#f4b932"
            })
        } 

    })
})