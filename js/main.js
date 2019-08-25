$(function() {

    // Toggle open
    $(".sideNav li").on("click", function(e) {
      $(this).find(".drop").slideToggle();
      $(this).siblings().find(".drop").slideUp();
      $(this).find("i").toggleClass("open");
      $(this).siblings().find("i").removeClass("open");
      e.stopPropagation();
    });
  
  
    // open Side Nav
    $(".menuTriger").on("click", function() {
      $(this).fadeOut();
      $(".sideNav").toggleClass("open");
      $(".navover").toggleClass("open");
      $("body").css("overflow", "hidden");
    });
  
  
    // Close Side Nav
    $(".navover, .close1").on("click", function() {
      if($(".sideNav").hasClass("open")){
        $(".menuTriger").fadeIn();
        $(".navover").removeClass("open");
        $(".sideNav").toggleClass("open");
        $("body").css("overflow", "auto");
      }
    });
  
    // Search
    $(".searBtn").on("click", function() {
      $(".search").toggleClass("open");
      $(".overlay").fadeIn();
    });
  
    if($(window).width() < 992){
      $(".overlay, .bar").on("click", function(e) {
        $(".search").removeClass("open");
        $(".overlay").fadeOut();
      });
    }

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: false,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: ["<span></span>","<span></span>"]
  });

  // clients Slider
  $('.disc .owl-carousel').owlCarousel({
    autoplay: false,
    rtl: true,
    loop: true,
    nav: true,
    items: 5,
    // margin: 30,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:3
      },
      // 992:{
      //     items:3,
      // },
      1200:{
        items:5
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

})