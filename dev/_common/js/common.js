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


function start(data){
	
	// const read
	
	const tl = init()
	const TIME = 2
	const F1_Y = 80
	tl.add("lax-1")
	tl.to(".f1-bg_1", {duration:TIME*1.2, y:0, ease:"back-in-out"}, "lax-1")
	tl.from(".f1-balloon-1", {y:F1_Y, duration:TIME*.7, ease:"back.out"}, "lax-1")
	tl.from(".f1-balloon-2", {y:F1_Y, duration:TIME*.9,  ease:"back.out"}, "lax-1")
	tl.from(".f1-balloon-3", {y:F1_Y, duration:TIME*1,  ease:"back.out"}, "lax-1")
	tl.from(".f1-txt", {y:F1_Y, duration:TIME*1.2,  ease:"back.out"}, "lax-1")
	tl.from(".f1-max", {y:F1_Y, duration:TIME*1.3,  ease:"back.out"}, "lax-1")

	tl.set(".frame2", {opacity:1})
	tl.add("f2", "+=.5")
	tl.to(".frame1", {duration:1, y:-250}, "f2")
	tl.from(".frame2", {duration:1, y:250}, "f2")
	tl.from(".f2-txta", {duration:.3, x:-100, y:"+=20", opacity:0, ease:"back.out"})
	tl.from(".f2-txtb", {duration:.3, x:-100, y:"+=20", opacity:0, ease:"back.out"})
	

	tl.set(".frame3", {opacity:1})
	tl.add("f3", "+=2")
	tl.to(".frame2", {duration:1, y:-250}, "f3")
	tl.from(".frame3", {duration:1, y:250}, "f3")
	tl.from(".f3-txt", {duration:.3, y:"+=20", x:-100, opacity:0, ease:"back.out"}, "-=.3")
	

	tl.set(".frame4", {opacity:1})
	tl.add("f4", "+=2")
	tl.to(".frame3", {duration:1, y:-250}, "f4")
	tl.from(".frame4", {duration:1, y:250}, "f4")

	tl.add(olg())

	// tl.play("f2")

}







export {size, init, start}



