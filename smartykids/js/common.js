$(function() {
	
    $(".toggle-mnu").click(function() {
        return $(this).toggleClass("on"), 
        $(".main-mnu").slideToggle(), !1 
    }), 

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true,
						loop:false
				}
		}
})

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {

			setTimeout(function(){
  			$('.mfp-close').trigger('click');
			}, 1000);

			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 500);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(document).ready(function(){




	$(".popup").magnificPopup();



	$("body").on("click", ".top", function() {
        return $("html, body").animate({ scrollTop: 0 }, "slow"), !1 
    });
    


    $("body").append('<div class="top"><i class="fa fa-angle-double-up">');
    $(window).scroll(function() { 
        $(this).scrollTop() > $(this).height() ? $(".top").addClass("active") : $(".top").removeClass("active") 
    });

	$('.closed-mnu').on('click', function() { 
		$('.toggle-mnu').click(); 
	});
});


$(document).ready(function(){

	var mql = window.matchMedia("(max-width: 767px)");

	if (mql.matches) {
	 $(".header-menu-list").on("click", "a", function(a) { 
        a.preventDefault();
        var b = $(this).attr("href"),
            c = $(b).offset().top;
        $("body,html").animate({ scrollTop: c - 86}, 1500) 
    });

	} else {
		 $(".header-menu-list").on("click", "a", function(a) { 
	        a.preventDefault();
	        var b = $(this).attr("href"),
	            c = $(b).offset().top;
	        $("body,html").animate({ scrollTop: c - 120}, 1500) 
	    });

	}
});