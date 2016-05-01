$(window).load(function(){
  // showPageInfo();
  var windowTop = $(window).scrollTop();
  var contentWords = $('.content');

  if (contentWords.length) {
    // var boxTop = contentWords.offset().top;
    var boxTop = 500;
    console.log(boxTop);
    var flag = false;

    $(window).scroll(function() {
      windowTop = $(window).scrollTop();
      // console.log(windowTop);

      if (!flag) {
        if (windowTop >= boxTop) {
          $('.navi, .content-float, .navi-fixed').addClass('fixed');
          $('.navi-fixed').show();
          flag = true;
        }
      }
      else {
        if (windowTop < boxTop) {
          $('.navi, .content-float, .navi-fixed').removeClass('fixed');
          $('.navi-fixed').hide();
          flag = false;
        }
      }

      if (windowTop >= boxTop) {
        console.log('hi');
        $('.content').each(function(i) {
            if ($(this).position().top <= windowTop) {
                $('.navi-fixed ul a.active').removeClass('active');
                $('.navi-fixed ul a').eq(i).addClass('active');
            }

        });
      } else {
          // $('.product-list ul a.active').removeClass('active');
      }


    }).scroll();
  }
  
});




var main = function() {

  $(".tab1").click(function() {

    $('html, body').animate({scrollTop: $("#tab1-item").offset().top}, 1000);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    console.log('1111');
  });
  $(".tab2").click(function() {
    $('html, body').animate({scrollTop: $("#tab2-item").offset().top}, 1000);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $(".tab3").click(function() {
    $('html, body').animate({scrollTop: $("#tab3-item").offset().top}, 1000);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $(".tab4").click(function() {
    $('html, body').animate({scrollTop: $("#tab4-item").offset().top}, 1000);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $(".tab5").click(function() {
    $('html, body').animate({scrollTop: $("#tab5-item").offset().top}, 1000);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $(".tab6").click(function() {
    $('html, body').animate({scrollTop: $("#tab6-item").offset().top}, 1000);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

}

$(document).ready(main);
