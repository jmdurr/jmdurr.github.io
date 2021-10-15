var tt = gsap.to, tf = gsap.from, tft = gsap.fromTo, td = gsap.delayedCall, ts = gsap.set, tweenDelay = .1;

init = function () {
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	build_timeline_main();
}

function build_timeline_main() {
	ts("#container_dc", { display: "block" });
	//ts(".cta_roll", {autoAlpha:0, display: "block" })

	function bg1In() {
		var bg1TL = gsap.timeline({ defaults: { duration: 10, ease: "none", force3D:true } });
			bg1TL.to(".imgDiv",{scale:1.05, rotation:1, x:5, transformOrigin:"200px 180px", ease:"expoScale(1, 1.05)"},"start")
		return bg1TL;
	}	
	

	var mainTL = gsap.timeline({ defaults: { duration: 1.25, ease: "power4.inOut", transformOrigin: "0 0",force3D:true} });
	mainTL
		.add("fr0", "+=0")
		.add(bg1In,"fr0")

		.to(bgFade, { autoAlpha: 0, overwrite: "none", onComplete: hideBGFade }, "fr0")
		.add("fr1", "-=1.5")
		.from("#copy1 .slidez", {autoAlpha:0, stagger:.05, x:-300},"fr1")
		.from("#copy1 .fadez", {autoAlpha:0},"fr1+=.8")
		.from("#card_container", {y:200},"fr1+=.25")
		.fromTo("#card_container .card_shine", {x:0, autoAlpha:.4,scale:1.5},{x:500},"-=.75")

		.add("fr2", "+=2")
		.to("#copy1 .full_div", {x:300, stagger:.05, autoAlpha:0},"fr2")
		.from("#copy2 .slidez", {autoAlpha:0, stagger:.05, x:-300},"fr2+=.1")
		.from("#copy2 .fadez", {autoAlpha:0},"fr2+=.8")

		.add("fr3", "+=1")
		.to("#legal1", {autoAlpha:0},"fr3")
		.from("#legal2", {autoAlpha:0},"fr3+=.5")
		
		.to("#copy2 .full_div", {x:300, stagger:.05, autoAlpha:0},"fr3")
		.from("#copy3 .slidez", {autoAlpha:0, stagger:.05, x:-300},"fr3+=.1")
		.from("#copy3 .fadez", {autoAlpha:0},"fr3+=.8")

		.from("#cta", {autoAlpha:0},"-=.5" )
		.to(".cta_arrow", {duration:.2, x:2, yoyo:true, repeat:3, onComplete: setRoll},"-=.5")
		.fromTo("#card_container .card_shine", {x:0, autoAlpha:.4,scale:1.5},{x:500},"-=.5")

		.add("ef")
		.call(function () { console.log(mainTL.duration()); });
	//mainTL.seek("fr2")
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

bgOverHandler = function(e) {
//	ts(".cta_roll", {autoAlpha:1,overwrite:"true"})
	//ts(".cta_out", {autoAlpha:0,overwrite:"true"})

	tft(".cta_arrow", {x:0}, {duration:.2, x:3, yoyo:true, repeat:3, overwrite:"true"});
	tft(".card_shine", {x:0, autoAlpha:.4,scale:1.5},{x:500, overwrite:"true"})
}

bgOutHandler = function(e) {
//	ts(".cta_roll", {autoAlpha:0,overwrite:"true"})
	//ts(".cta_out", {autoAlpha:1,overwrite:"true"})
}

function bgExitHandler(e) {

}






