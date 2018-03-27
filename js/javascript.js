window.onbeforeunload = function () {
  window.animate({scrollTop:0}, 900);
}


var loader = $('#loading');
var name = $('.defineMW');


window.onload = function(){

	setTimeout(function () {
		$('.defineMW').toggleClass('animate').delay(500).queue(function() {
			loader.fadeOut(1000);
			setTimeout(function() {
				loader.remove();
			}, 1000);
		});
	}, 500);
};


function removeLoader() {
	loader.delay(1000).remove();
}



$(document).ready(function() {
	var menu, mIcon, stripe, blur, navbar, navicon, loader, logoVert;
	
	menu = $('#menuNav');
	mIcon = $('.menu-icon');
	stripe = $('.stripe');
	blur = $('.blur');
	navbar = $('.navbar');
	upBtn = $('#btn-bt-Top');

	$(window).scrollTop(0);
	menu.hide();


	mIcon.on('click', function() {
		stripe.toggleClass('animate');		
		blur.delay(500).toggleClass('active');
		menu.fadeToggle(300);
		upBtn.toggleClass('hide');
		navbar.toggleClass('open');
	});

	//navbar on scroll
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			navbar.addClass("active");
		}
		else {
			navbar.removeClass("active");
		}
	});


	// back to top button
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			document.getElementById("btn-bt-Top").style.visibility = "visible";
			document.getElementById("btn-bt-Top").style.opacity = ".98";
		} else {
			document.getElementById("btn-bt-Top").style.visibility = "hidden";
			document.getElementById("btn-bt-Top").style.opacity = "0";
		}
	};

	upBtn.click(function(){
		$('html, body').animate({scrollTop:0}, 900);
	});
});