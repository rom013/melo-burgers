// start slide
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
// end slide


// start slot menu

const $cardMenuList = Array.from(document.querySelectorAll('.card-menu-list'))
const slotsType = Array.from(document.getElementsByName("option-menu"))

slotsType.forEach((e)=>{e.addEventListener('click', ()=>{
    $cardMenuList.forEach((e)=>{e.classList.toggle('card-menu-list')})
})})

     
    



// for(let i = 0; i<10; i++){
//     document.querySelector('.slots-grid').insertAdjacentHTML("afterbegin", `
//         <div class="card-menu-grid">
//             <div class="h-32">
//                 <img class="h-full object-fill" src="https://s3.amazonaws.com/institucional-statics-files/site/uploads/foundue22/images/banner.jpg" alt="">
//             </div>
//             <div class="">
//                 <span class="text-white font-bold text-sm">COMBO-1</span>
//                 <span class="text-yellow-500 font-bold text-sm">R$ 33,00</span>
//                 <span class="text-orange-500 text-xs">Ver mais</span>
//             </div>
//         </div>
//     `)
// }