$(document).ready(function($) {

//helper function
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//center all .myClass elements around their origins
TweenLite.set(".fearlessText, .lion", {xPercent:-50, yPercent:-50});



//lion
var shapes = $("g"),
    tl = new TimelineMax({repeat:-1});
	
TweenLite.set(shapes, {perspective:900})

//tl.staggerFrom(shapes, .9, {css:{autoAlpha:0, scale:.8, rotationX:randomNumber(-80, 180), transformOrigin:"bottom center"}, ease: Back.easeOut}, 0.02 )
//.staggerTo(shapes, .9, {css:{autoAlpha:0, transformOrigin:"center center"}, delay:2.6, ease: Back.easeOut}, 0.02 );

//loop through each shape and create a tween with random values for each
shapes.each(function(index, element){
  tl.from(element, 0.9, {autoAlpha:0, scale:randomNumber(.02, 2.4),  rotationY:randomNumber(-80, 80), transformOrigin:"center center",
    top: randomNumber(-300,300) ,
    left: randomNumber(-300,300),
   ease: Back.easeOut}, index * 0.015)
    .staggerTo(shapes, .9, {css:{autoAlpha:0, transformOrigin:"center center"}, delay:2.6}, 0.02);
})

//TweenMax.from(".lion", 1, {rotationX:60, transformOrigin:"300 -200"})




/*function replayFunction() {
  //shapes.play();
}*/


});