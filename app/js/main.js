$(function(){

  $('.bestsellers__slider').slick({
    nextArrow: '<button type="button" class="slick_button slick-next"><img src="images/next.svg" alt=""></button>' ,
    prevArrow: '<button type="button" class="slick_button slick-prev"><img src="images/back.svg" alt=""></button>' ,
    slidesToShow: 3,
    slidesToScroll: 1,
  });



  $('.header__box-user').on('click', function(){
    $(this).children('.user__items').toggleClass('user__items-active');
    $(this).children('.angle').toggleClass('angle-active');
  });

  
  $('.mk__slider-main').slick({
    nextArrow: '<button type="button" class="slick_button slick-next"><img src="images/next.svg" alt=""></button>' ,
    prevArrow: '<button type="button" class="slick_button slick-prev"><img src="images/back.svg" alt=""></button>' ,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
      