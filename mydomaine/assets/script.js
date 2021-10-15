/*	version: "v4.1.6"	*/

$.noConflict();
var $ = jQuery;

var _duration = 0.4;

/************************************ Custom JS *****************************************/

function init_animation() {
	"use strict";
    
	TweenMax.to("#intro1", _duration, {x:0, alpha:1, ease:Power2.easeIn});

	TweenMax.delayedCall(5, intro_two);
	TweenMax.delayedCall(9, intro_three);
    TweenMax.delayedCall(13, intro_end);
}

function intro_two() {
	"use strict";
	TweenMax.to("#intro1", _duration, {alpha:0});
	TweenMax.to("#intro2", _duration, {x:0, alpha:1, delay:_duration, ease:Power2.easeIn});
}

function intro_three() {
	"use strict";
	TweenMax.to("#intro2", _duration, {alpha:0});
	TweenMax.to("#intro3", _duration, {x:0, alpha:1, delay:_duration, ease:Power2.easeIn});
    
    TweenMax.to("#logo", _duration, {y:-20, delay:_duration*2});
    
    TweenMax.to("#legal", _duration, {alpha:1, delay:_duration*3, ease:Power2.easeIn});
}

function intro_end() {
	"use strict";
    TweenMax.to("#legal", _duration, {alpha:0});
     TweenMax.to("#logo", _duration, {y:0, delay:_duration});
    
	TweenMax.to("#intro3", _duration, {alpha:0});
	TweenMax.to("#intro4", _duration, {x:0, alpha:1, delay:_duration*2, ease:Power2.easeIn});
	
   TweenMax.to($("#cta"), 1, {scale:1, alpha:1, delay:_duration*3, ease:Expo.easeOut, onComplete:init_cta});
}

function init_cta() 
{
	"use strict";
	$("#main-panel").on("mouseover", function(evt) {
		TweenMax.to($("#cta"), 1, {alpha:0.75, ease:Back.easeOut, force3D:false});
	});

	$("#main-panel").on("mouseout", function(evt) {
		TweenMax.to($("#cta"), 1, {alpha:1, force3D:false});
	});
}

/*********************************************************************************************/

function init_hit_areas($target, $num, $delay) {
	if ($delay) {
		TweenMax.to($target, 0.8, {alpha:1, scale:$num, delay:$delay, ease:Elastic.easeOut, onComplete:function() {
			TweenMax.to($target, 0.5, {scale:0, alpha:0, ease:Back.easeIn});
		}});
	} else {
		TweenMax.to($target, 0.8, {alpha:1, scale:$num, ease:Elastic.easeOut, onComplete:function() {
			TweenMax.to($target, 0.5, {scale:0, alpha:0, ease:Back.easeIn});
		}});
	}
}
