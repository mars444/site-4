
$(function(){

  $('.shedules__box__slider').slick({
    nextArrow: '<button type="button" class="slick_button slick-next"><img src="images/next.svg" alt=""></button>' ,
    prevArrow: '<button type="button" class="slick_button slick-prev"><img src="images/back.svg" alt=""></button>' ,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,

        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 709,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,

        }
      },
  
    ]
  });



 
   


});

      