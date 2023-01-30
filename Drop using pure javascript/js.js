let input=document.querySelector(".input")
let box=document.querySelector(".box")
let add=document.querySelector(".add")
add.onclick=function(){
    if(input.value!="")
    box.innerHTML+=`
    <p class="item" draggable="true">${input.value}</p>
    `
    input.value=""
    draggble()
}

let drug=null
function draggble(){
    let item=document.querySelectorAll(".item")
    let boxs=document.querySelectorAll(".box")

    item.forEach(item=>{
        item.addEventListener("dragstart", function(){
            drug=item
            item.style.opacity='0.6'
        })
        item.addEventListener("dragend", function(){
            drug=null
            item.style.opacity='1'

        })
        boxs.forEach(items=>{
            items.addEventListener("dragover",function(e){
                e.preventDefault()

                this.style.color="black"
                this.style.background="#090"
            })
            items.addEventListener("dragleave",function(){
                this.style.color="black"
                this.style.background="white"
            })
            items.addEventListener("drop",function(){
                this.append(drug)
                this.style.color="black"
                this.style.background="white"
            })
        })

    })


}