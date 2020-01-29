$(document).ready(function() {

	/*Header menu*/

	$(".header .header-menu").click(function(e){
	  e.preventDefault();
	  $(".menu").toggleClass("show");
	});

	$(document).on('click','.milk-shadow',function(){
	  $(".header .header-menu").click();
	});


	$('.banners').owlCarousel({
	    loop:false,
	    items:3,
	    margin:15,
	    stagePadding: 25,
	    responsiveClass:true,
	    responsive:{
	    		0:{
	    		    items:1
	    		},
	            992:{
	                items:2
	            },
	            1200:{
	                items:3
	            }
	        }
	})

});

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

