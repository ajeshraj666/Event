//Main Menu
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");
$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});

//Append and Prepend
$('.first ul').clone().prependTo('.main-nav').addClass('desk-hide')
$('.last ul').clone().appendTo('.main-nav').addClass('desk-hide')


//Product slider
$('.slider-testimonial').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay:true,
  speed: 200,
  arrows: false,
  fade: false,
  responsive: [
   
  
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,

      }
    }

  ]
});




  //scroll top

let mybutton = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




document.addEventListener("click", closeAllSelect);






 