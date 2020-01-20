// Added burger menu

$(document).ready(function() {
	$('.burger').click(function(event){
		$('.burger, .nav').toggleClass('active');
	});
});

// Addded slick slider

$('.gallery-box').slick({
    infinite: true,
  	slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
	responsive: [{
		breakpoint: 769,
		settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		}
 	 }] 
});


// Addded plugin wow

 new WOW().init();




