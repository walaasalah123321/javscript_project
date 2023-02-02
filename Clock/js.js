let hours=document.querySelector(".hours")
let minut=document.querySelector(".minut")

let second=document.querySelector(".second")
let mili=document.querySelector(".mili")
let data=setInterval(
    function(){
        let datatime=new Date()
        hr=datatime.getHours()
        if (hr<=9)
        hr ='0'+ hr
        hours.innerHTML= hr
        mn=datatime.getMinutes()
        if (mn<=9)
        mn ='0'+ mn
        minut.innerHTML= mn
        sc=datatime.getSeconds()
        if (sc<=9)
        sc ='0'+ sc
        second.innerHTML= sc
        mi=datatime.getMilliseconds()
        if (mi<9) mi="00" + mi
        else if (mi<100) mi="0"+mi
        mili.innerHTML= mi
    }
    
    ,100)

