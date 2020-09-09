$(function(){

    new WOW().init();

    $(".main-slider").owlCarousel({
        loop:true,
        items:1,
        nav:false,
        animateOut:'fadeOut',
        autoplay:true
    });

    $(".reviews-slider").owlCarousel({
        loop:true,
        items:1,
        nav:false,
        animateOut:'fadeOut',
        autoplay:true
    });

    //кнопка прокрутки страницы вверх
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    
    $('#scrollToTop').click(function() {
        $('body,html').animate({scrollTop:0},700);
    });

    //выпадающее меню
    if( $(window).width() > 1201 ){
        $(".header .menu>ul>li").hover(
            function(){
                $(this).children(".sub-menu").stop().slideDown();
            }, 
            function(){
                $(this).children(".sub-menu").stop().hide();
        });
    }    

    //прилипающее меню
	$(window).scroll(function() {
		var scroll = $(window).scrollTop(); 
		if (scroll > 0) {
			$(".header").addClass("fixed");
		} else{
			$(".header").removeClass("fixed");
		}
    });
    
    //открытие-закрытие адаптивного меню
    $(".header .menu-toggle").on("click", function(){
        var menu = $(this).next(".menu");
        if( menu.hasClass("visible") ){
            menu.removeClass("visible");
            $(this).removeClass("active");            
            $("html, body").css("overflow", "visible");
        } else{
            menu.addClass("visible");
            $(this).addClass("active");
            $("html, body").css("overflow", "hidden");
            $(".header .menu>ul").animate({ scrollTop: 0 }, 500);
        }
    });

    //открытие-закрытие подменю в адаптиве
    $(".sub-menu-trigger").on("click", function(){
        $(this).toggleClass("active");
        $(this).next(".sub-menu").slideToggle();
    });

    //аккордеон в адаптиве для страницы команда
    if( $(window).width() <= 500 ){
        $(".staff-page .small-title").on("click", function(){
            if( $(this).hasClass("active") ){
                $(this).removeClass("active").next(".staff-page-wrapper").css("display", "none");
            } else{
                $(this).addClass("active").next(".staff-page-wrapper").css("display", "flex");
            }            
        });
    }
    $(window).resize(function(){
        if( $(window).width() <= 500 ){
            $(".staff-page .small-title").on("click", function(){
                if( $(this).hasClass("active") ){
                    $(this).removeClass("active").next(".staff-page-wrapper").css("display", "none");
                } else{
                    $(this).addClass("active").next(".staff-page-wrapper").css("display", "flex");
                }                
            });
        }
    });


    //модальное окно
    $("#callback").on("click", function(){
        $("#modal").show();
        $("#modal .modal-inner").fadeIn(500);
        $("html, body").addClass("no-scroll");
    });

    $("#modal .close").on("click", function(){
        $("#modal").hide();  
        $("#modal .modal-inner").hide();      
        $("html, body").removeClass("no-scroll");
    });

    $(document).mouseup(function (e){ 
		var div = $("#modal .modal-inner"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            $("#modal").hide();      
            $("#modal .modal-inner").hide();  
            $("html, body").removeClass("no-scroll");
		}
});

});
