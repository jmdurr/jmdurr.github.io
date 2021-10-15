var tt = gsap.to, tf = gsap.from, tft = gsap.fromTo, td = gsap.delayedCall, ts = gsap.set, tweenDelay = .1;

init = function () {
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	build_timeline_main();
	addListeners();
}



function build_timeline_main() {
	//Show Ad
	ts("#container_dc", { display: "block" });

	var mainTL = gsap.timeline({ defaults: { duration: 1.1, ease: "power4.inOut", force3D: true } });
	mainTL
		.set([".card_shine"], { scaleX: 3, scaleY:1.5, autoAlpha: .4 })
		.set("#bbc_container ", { x:-76})
		.set("#gold_container ", { x:-46})
		.set("#bbp_container ", { x:-5})
		.set("#plat_container ", { x:47})

		.add("fr0", "+=0")
		.to(bgFade, { autoAlpha: 0, overwrite: "none", onComplete: hideBGFade }, "fr0")

		//.addPause()
		.add("fr1", "-=1.15")

		.to("#bg4", { x:290}, "fr1")
		.to("#bg3", { x:280}, "fr1+=.1")
		.to("#bg2", { x:270}, "fr1+=.2")

		.fromTo("#bottom_cards .card_containers ", { scale:.8, y:185},{y:85, stagger:.05}, "fr1+=.3")
		.from("#copy1 .full_div", { x: -300, autoAlpha:0, stagger:.05}, "fr1+=.3")

		.fromTo("#bottom_cards .card_shine", { x: 0 }, { x: 500, duration: .75,  stagger:.1}, "fr1+=.9")

		.add("fr2", "+=.5")

		.to("#bottom_cards .card_containers", { scale:.8, y:185, stagger:.05}, "fr2")
		.to("#copy1 .full_div", { x: -300, autoAlpha:0, stagger:.05}, "fr2")

		.to("#bg2", { x:75}, "fr2+=.1")
		.to("#bg3", { x:150}, "fr2+=.2")
		.to("#bg4", { x:225}, "fr2+=.3")

		.from(".svg_image", {x:350, stagger:.05},"fr2+=.1")

		.add("fr3", "+=.5")
		.to(".svg_image", {x:350, stagger:.05},"fr3")
		.fromTo(".main_cards", {x:-350, display:"none"}, {x:-170, display:"block", stagger:.05},"fr3")

		.add("fr4", "+=0")
		.to("#plat_container2", {x:-15},"fr4")
		.to("#bbp_container2", {x:-15},"fr4+=.05")
		.to("#gold_container2", {x:-15},"fr4+=.1")
		.to("#bbc_container2", {x:-15},"fr4+=.2")

		.to("#bg4", { x:290}, "fr4")
		.to("#bg3", { x:280}, "fr4+=.1")
		.to("#bg2", { x:270}, "fr4+=.2")

		.from("#copy2a", {autoAlpha:0}, "fr4+=.75")

		.fromTo("#bbc_container2 .card_shine", { x: 0 }, { x: 500, duration: 1}, "fr4+=.8")

		.add("fr5", "+=0")
		.to("#copy2a", {autoAlpha:0, duration:.4}, "fr5")
		.to("#bbc_container2", {x:-350},"fr5")
		.fromTo("#gold_container2", {x:100},{x:-15},"fr5+=.2")
		.to("#bg2", { x:10}, "fr5+=.1")
		.from("#copy3a", {autoAlpha:0}, "fr5+=.75")

		.fromTo("#gold_container2 .card_shine", { x: 0 }, { x: 500, duration: 1}, "fr5+=.8")

		.add("fr6", "+=0")
		.to("#copy3a", {autoAlpha:0, duration:.4}, "fr6")
		.to("#gold_container2", {x:-350},"fr6")
		.fromTo("#bbp_container2", {x:100},{x:-15},"fr6+=.2")
		.to("#bg3", { x:20}, "fr6+=.1")
		.from("#copy4a", {autoAlpha:0}, "fr6+=.75")

		.fromTo("#bbp_container2 .card_shine", { x: 0 }, { x: 500, duration: 1}, "fr6+=.8")

		.add("fr7", "+=0")
		.to("#copy4a", {autoAlpha:0, duration:.4}, "fr7")
		.to("#bbp_container2", {x:-350},"fr7")
		.fromTo("#plat_container2", {x:100},{x:-15},"fr7+=.2")
		.to("#bg4", { x:30}, "fr7+=.1")
		.from("#copy5a", {autoAlpha:0}, "fr7+=.75")
		.fromTo("#plat_container2 .card_shine", { x: 0 }, { x: 500, duration: 1}, "fr7+=.8")


		.add("fr8", "+=0")
		.to("#copy5a", {autoAlpha:0, duration:.4}, "fr8")
		//.to("#plat_container2", {x:-275},"fr8")
		.to("#bg4", { x:290}, "fr8")
		.to("#bg3", { x:280}, "fr8+=.1")
		.to("#bg2", { x:270}, "fr8+=.2")

		.from("#copy6 .full_div", { x: -300, autoAlpha:0, stagger:.05}, "fr8+=.3")
		.from("#cta", { x: -300, autoAlpha:0}, "fr8+=.35")
		.to(".cta_arrow", { x:4, repeat:1, duration:.5, yoyo:true, onComplete: setRoll}, "fr8+=1")
		.to("#bottom_cards .card_containers ",{y:85, stagger:.05}, "fr8+=.3")
		.fromTo("#bottom_cards .card_shine", { x: 0 }, { x: 500, duration: .75,  stagger:.1}, "fr8+=.9")


		.add("ef")
		.call(function () { console.log(mainTL.duration()); });
//	mainTL.seek("fr4")
}


hideBGFade = function () {
	bgFade.style.display = "none";
}


//Add Event Listeners
setRoll = function () {
	var x = document.getElementById("background_exit_dc");
	if (x.addEventListener) {
		// For all major browsers, except IE 8 and earlier
		x.addEventListener('mouseover', bgOverHandler, false);
		x.addEventListener('mouseout', bgOutHandler, false);
	} else {
		// For IE 8 and earlier versions hide rollover effect
	}
}
addListeners = function () {
}


bgOverHandler = function (e) {
	tft(".cta_arrow", { x: 0 }, { duration: .2, x: 3, yoyo: true, repeat: 3, ease: Power1.easeInOut, overwrite: "true" });
	tft("#bottom_cards .card_shine", { x:0 }, { x: 500, duration: .75, ease: "Power3.easeInOut",  stagger:.1, overwrite: "true" });

	//.fromTo("#bottom_cards .card_shine", { x: -350 }, { x: 400, duration: 1,  stagger:.1}, "fr8+=.9")

}

bgOutHandler = function (e) {

}

function bgExitHandler(e) {

}






