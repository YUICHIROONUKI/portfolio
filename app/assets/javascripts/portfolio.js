$(document).on('turbolinks:load', function(){
  $(".portfolio__header__nav__list__title").on("mouseover", function(){
    $(this).css("background-color", "rgba(26,13,6,0.7)");
  });
  $(".portfolio__header__nav__list__title").on("mouseout", function(){
    $(this).css("background-color", "transparent");
  });
  $(".profile").on("click", function(){
    $('html,body').animate({scrollTop: $(".portfolio__main__profile").offset().top});
  });
  $(".skill").on("click", function(){
    $('html,body').animate({scrollTop: $(".portfolio__main__skill").offset().top});
  });
  $(".works").on("click", function(){
    $('html,body').animate({scrollTop: $(".portfolio__main__works").offset().top});
  });
  $(".contact").on("click", function(){
    $('html,body').animate({scrollTop: $(".portfolio__footer").offset().top});
  });
  $(".portfolio-image").on('click', function(){
    $(".detail-freemarket").css("display", "none");
    $(".detail-saaaaving").css("display", "none");
    $(".detail-myblog").css("display", "none");
    $(".detail-portfolio").toggle(1000);
  });
  $(".freemarket-image").on('click', function(){
    $(".detail-portfolio").css("display", "none");
    $(".detail-saaaaving").css("display", "none");
    $(".detail-myblog").css("display", "none");
    $(".detail-freemarket").toggle(1000);
  });
  $(".saaaaving-image").on('click', function(){
    $(".detail-portfolio").css("display", "none");
    $(".detail-freemarket").css("display", "none");
    $(".detail-myblog").css("display", "none");
    $(".detail-saaaaving").toggle(1000);
  });
  $(".myblog-image").on('click', function(){
    $(".detail-portfolio").css("display", "none");
    $(".detail-freemarket").css("display", "none");
    $(".detail-saaaaving").css("display", "none");
    $(".detail-myblog").toggle(1000);
  });
});
