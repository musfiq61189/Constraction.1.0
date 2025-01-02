$(document).ready(function($) {

    "use strict";

    // Smooth Scroll start
    $('.navbar-nav li a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
    // Smooth Scroll end

    //Close Nav
    $('.nav li a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });
    //Close Nav end

    //Nav menu active class change start
    var lastId,
    topMenu = $("#header"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
    //Nav menu active class change end

    // on scroll fixed navbar and back to top btn start
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 55) {
            $('#back-to-top').addClass('reveal');
            $('#header').addClass('navbar-fixed-top');
        }
        else {
            $('#back-to-top').removeClass('reveal');
            $('#header').removeClass('navbar-fixed-top');
        }

        // Bind to scroll
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }

    });
    // on scroll fixed navbar and back to top btn end

    // revolution slider start
    $("#slider1").revolution({
        sliderType:"standard",
        sliderLayout:"auto",
        delay:9000,
        navigation: {
            arrows:{enable:true}              
        },            
        gridwidth:1170,
        gridheight:700        
    });
    // revolution slider end

    //animated counter start
    $('.count-box').appear(function(){
        var datacount = $(this).attr('data-count');
        $(this).find('.timer').delay(6000).countTo({
            from: 0,
            to: datacount,
            speed: 5000,
            refreshInterval: 50,
        });
    });
    //animated counter end
    
    // portfolio start
    $(window).on("load",function() {
        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolio-nav li').on("click", function() {
            $('.portfolio-nav li.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end

    // feedback start
    $('.feedback').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        //nav: true,
        smartSpeed: 700,
    });
    // feedback end

    // footer gallery start
    $('.f-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
    // footer gallery end

    // bootstrap accordion start
    $('#accordion1').collapse();
    // bootstrap accordion end

    // dropdown menu on mouse hover start
    $(".dropdown").hover(function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');
        },function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');
    });
    // dropdown menu on mouse hover end

    //back to top button start
    $('#back-to-top').on('click', function(){
        $("html, body").animate({scrollTop: 0}, 500);
        return false;
    });
    //back to top button end

}).jQuery();