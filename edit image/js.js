let sate=document.getElementById("sart")
let contrast=document.getElementById("contrast")
let brightness=document.getElementById("brightness")
let Sepia=document.getElementById("Sepia")
let grayscale=document.getElementById("grayscale")
let Blur=document.getElementById("Blur")
let Huirotate=document.getElementById("Hui-rotate")
let down=document.getElementById("download")
let reset=document.querySelector("span")
let image=document.getElementById("image")

let upload=document.getElementById("upload")
let imgbox=document.querySelector(".img-box")
window.onload=function(){
    down.style.display="none"
    reset.style.display="none"
    imgbox.style.display="none"
}

upload.onchange=function(){
    down.style.display="block"
    reset.style.display="block"
    imgbox.style.display="block"
    let file=new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
        image.src=file.result
        restvalue()

    }
    

}
let restvalue=function(){
    image.style.filter="none"
    contrast.value=100
        brightness.value=100
        grayscale.value=0
        Blur.value=0
        Huirotate.value=0
        Sepia.value=0
        sate.value=100

}

let filters=document.querySelectorAll("ul li input")
filters.forEach(item =>{
    item.addEventListener("input",function(){
        console.log(`saturate(${sart.value}%) contrast(${contrast.value}%)`)
    image.style.filter = `
    saturate(${sate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    grayscale(${grayscale.value})
    Blur(${Blur.value}px)
    Sepia(${Sepia.value}%)    
    hue-rotate(${Huirotate.value}deg)

  
  `
    
    })

})
reset.addEventListener("click",function(){
    restvalue()

})
download.addEventListener("click",function(){
    down.href=image.src
})