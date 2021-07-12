
$(function () {

  $('.shedules__box__slider').slick({
    nextArrow: '<button type="button" class="slick_button slick-next"><img src="images/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick_button slick-prev"><img src="images/back.svg" alt=""></button>',
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,

        }
      },

    ]
  });


  const menuLinks = document.querySelectorAll('.menu__list-item-link');
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuClick);
    });
    function onMenuClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }

    }
  }

 


  $(".menu-burger-icon").click(function (e) {
    $(".menu").addClass('menu-active');
    $("body").addClass('lock');
  })

  $(".menu-burger-icon-close").click(function (e) {
    $(".menu").removeClass('menu-active');
    $("body").removeClass('lock');
  })

  $(".menu__list-item").click(function (e) {
    $(".menu").removeClass('menu-active');
    $("body").removeClass('lock');
  })

  
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }



});

