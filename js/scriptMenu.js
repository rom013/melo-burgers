const divSlide = document.querySelector('.slide')
let countWidth = document.querySelector('.img-corousel').width
let corouselWidth = document.querySelectorAll('.img-corousel').length
let count = 1

const totalWidthCorousel = corouselWidth * countWidth


document.getElementById('btn-1').checked = true


setInterval(()=>{nextImage()},7000)

function nextImage(){
    const widthImage = document.querySelector('.img-corousel').width
    if(countWidth >= totalWidthCorousel){
        count = 1
        document.getElementById('btn-'+ count).checked = true
        divSlide.style.left = `0px`
        countWidth = widthImage
    }
    else{
        count++
        divSlide.style.left = `-${countWidth}px`
        countWidth = widthImage + countWidth
        document.getElementById('btn-'+ count).checked = true
    }
}

Array.from(document.getElementsByName('ab')).forEach((e)=>{
    e.addEventListener("click", ()=>{
        const valueCLick = parseInt(e.id.replace("btn-", "")) - 1
        const position = document.querySelector('.img-corousel').width * valueCLick
        divSlide.style.left = `-${position}px`
    })
})