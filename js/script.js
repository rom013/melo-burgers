//ScrollReveal
window.sv = ScrollReveal({ reset: true })

sv.reveal('.an-contact', { duration: 5000, rotate: { x: 90, y: 50, z: 80 }, reset: false })
sv.reveal('.logo-header', { duration: 4000, delay: 1000, origin: 'top', distance: '800px' })
sv.reveal('.section-reveal-top', { duration: 5000, origin: 'top', distance: '100px', reset: true })
sv.reveal('.section-reveal-lateral', { duration: 5000, delay: 500, origin: 'left', distance: '100px', reset: true })


const $imgGallery = Array.from(document.querySelectorAll('.img-gallery'))
const getImageGallery = document.querySelectorAll('.img-before')
const arrayImgGallery = Array.from(getImageGallery)
let count = 1

$imgGallery.forEach((e)=>{
	e.addEventListener('click', displayImg)
})


function displayImg(b) {
	////console.log(e.target.firstElementChild.src)
	const $main = document.getElementById('main')
	count = parseInt(b.srcElement.dataset.index)

	$main.insertAdjacentHTML('afterbegin', `
		<div class="fixed flex flex-col bg-[rgba(0,0,0,.5)] h-screen w-full top-0 md:p-8 box-border gap-y-4 z-[99999]" id="imgFull">
			<div class="text-white relative left-[90%] cursor-pointer w-8 h-8 text-3xl hover:text-orange-400 transition" id="btnClose">
				<i class="ph-x"></i>
			</div>

			<div class="flex justify-center item-center gap-10 items-center h-[calc(100%-32px)]">
				<button class="text-white w-8 flex items-center justify-center bg-[rgba(0,0,0,.5)] h-full disabled:bg-red-500 btn-nav-gallery" id="btnBack">
					<i class="ph-caret-left"></i>
				</button>
				<div class="w-full h-screen max-w-5xl max-h-full flex items-center">
					<img class="block w-full min-h-3/5 object-contain max-h-full" src="${b.target.firstElementChild.src}" id="imgShowFull">
				</div>
				<button class="text-white w-8 flex items-center justify-center bg-[rgba(0,0,0,.5)] h-full disabled:bg-red-500 btn-nav-gallery" id="btnNext">
					<i class="ph-caret-right"></i>
				</button>
			</div>
		</div>
	`)

	document.getElementById('btnClose').addEventListener('click', close)
	document.getElementById('btnBack').addEventListener('click', (e)=>{left(e.target,-1)})
	document.getElementById('btnNext').addEventListener('click', (e)=>{left(e.target,1)})
}


function left(a,e){
	Array.from(document.querySelectorAll('.btn-nav-gallery')).forEach((e)=>{e.disabled = false})
	count <= -1 || count >= arrayImgGallery.length ? (
		count < 0 ? count++ : count--,
		a.disabled = true
		//console.log(count,"stop")
	) : (
		count += e,
		//console.log(arrayImgGallery[count]),
		//console.log(count),
		document.getElementById('imgShowFull').src = arrayImgGallery[count].src
	)
}

function close(){
	const getImageFull = document.getElementById('imgFull')
	getImageFull.remove()
}


const getDate = new Date()
const hours = getDate.getHours()
const day = getDate.getDay()

const $header = document.getElementsByTagName('header')[0]

$header.insertAdjacentHTML('afterbegin', `
	<div class="relative flex justify-center md:text-center md:inline-block">
		<span
			id="displaySpan"
			class="display-mobile md:displayDesktop"
		></span>
	</div>
`)

const insertSpan = document.getElementById('displaySpan') 
const insertopeningHours = document.getElementById('openingHours')

day != 1 ?(
	//console.log("hoje não é segunda"),

	(day == 2 || day == 3 || day == 4) ? (
		//console.log("hoje é terça, quarta ou quinta"),
		insertopeningHours.textContent = "19:00h às 22:00",
		(hours == 19 || hours == 20 || hours == 21 || hours == 22) ? 
		(
			//console.log(`aberto: ${hours}`),
			displaySpan.textContent = "ABERTO",
			insertSpan.classList.toggle('md:open'),
			insertSpan.classList.add('bg-green-500')
		) : 
		(
			//console.log(`fechado: ${hours}`),
			displaySpan.textContent = "FECHADO",
			insertSpan.classList.toggle('md:close'),
			insertSpan.classList.add('bg-red-600')
			
		)
	) : 
	(
		//console.log('hoje é sexta, sabado ou domingo'),
		insertopeningHours.textContent = "18:00h às 00:00",
		(hours >= 18 || hours == 0) ? 
		(
			//console.log(`aberto: ${hours}`),
			displaySpan.textContent = "ABERTO",
			insertSpan.classList.toggle('md:open'),
			insertSpan.classList.add('bg-green-500')
		) :
		(
			//console.log(`fechado: ${hours}`),
			displaySpan.textContent = "FECHADO",
			insertSpan.classList.toggle('md:close'),
			insertSpan.classList.add('bg-red-600')
			
		)
	)
):(
	//console.log("hoje é segunda"),
	insertopeningHours.textContent = "Terça à Domingo",
	displaySpan.textContent = "FECHADO",
	insertSpan.classList.toggle('md:close'),
	insertSpan.classList.add('bg-red-600')
)

const toTopBtn = document.getElementById("toTop").addEventListener("click", ()=>{window.scrollTo(0,0)})
let btnsFlout = document.querySelectorAll(".btn-float")
btnsFlout = Array.from(btnsFlout)

window.addEventListener('scroll', ()=>{
	window.pageYOffset < 200 ?
		btnsFlout.forEach((e)=>{
			e.style.display = "none"
		}) 
	: 
		btnsFlout.forEach((e)=>{
			e.style.display = "flex"
		})
})