let fin=JSON.parse(localStorage.getItem("allproduct"))
let choseprod=localStorage.getItem("showproduct")
let show=document.querySelector(".product")

let found=fin.find(item=> item.id==choseprod)
console.log(found)
show.innerHTML=
`
<div class="producted">
<img class="product-img-details" src="${found.url}">
<div>
    <h3 >${found.title}</h3>
    <p>the THIRD product can you buy it</p>
    <span>${found.size}</span>
</div>

</div>
`
