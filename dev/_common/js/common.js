import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const READ = {
	t1: 2.5,
	t2a: 2.8,
	t2b: 2.3,
}



const {w, h} = size




	
function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}


let data_ = {}
const ease = "power2.out"

function pan(tl, a, b, delay){
	console.log(a, b);
	tl.set(b, {opacity:1})
	tl.add(a, delay)
	tl.to(a, {duration:1, x:-300, ease:"power4.out"}, a)
	tl.from(b, {duration:1, x:300, ease:"power4.out"}, a)
}


function start(data){
	
	// const read
	
	const tl = init()
	const TIME = 2
	const F1_Y = -250
	
	tl.add("lax-1")
	tl.to(".f1-bg_1", {duration:TIME*1.2, y:0}, "lax-1")
	tl.from(".f1-balloon-1", {y:F1_Y, duration:TIME*.8, ease:ease}, "lax-1")
	tl.from(".f1-balloon-2", {y:F1_Y, duration:TIME*.9,  ease:ease}, "lax-1")
	tl.from(".f1-balloon-3", {y:F1_Y, duration:TIME*1,  ease:ease}, "lax-1")
	tl.from(".f1-txt", {y:F1_Y, duration:TIME*1.1,  ease:"back.out"}, "lax-1")
	tl.from(".f1-max", {y:F1_Y, duration:TIME*1.2,  ease:ease}, "lax-1")

	pan(tl, ".frame1", '.frame2', "+=.5")
	

	tl.from(".f2-txta", {duration:.3, x:-100, y:"+=20", opacity:0, ease:"back.out"})
	tl.from(".f2-txtb", {duration:.3, x:-100, y:"+=20", opacity:0, ease:"back.out"})
	

	pan(tl, ".frame2", '.frame3', "+=2")

	tl.from(".f3-txt", {duration:.3, y:"+=20", x:-100, opacity:0, ease:"back.out"}, "-=.3")
	

	pan(tl, ".frame3", '.frame4', "+=3.5")

	tl.add("end", "+=.3")
	tl.from(".f4-cta", {duration:.3, opacity:0, ease:"back.out"}, "end")

	tl.add(olg(), "end")

	// tl.play("f2")

}







export {size, init, start}



