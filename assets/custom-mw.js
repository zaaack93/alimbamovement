$( document ).ready(function() {
  $('.custom-row-icon .icons-row__slider ').slick({
      dots: true,
      infinite:true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      adaptiveHeight: false,
      prevArrow:"<img class='a-left control-c prev slick-prev' src='https://cdn.shopify.com/s/files/1/0566/5721/5536/files/Group_382.png?v=1702881782'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='https://cdn.shopify.com/s/files/1/0566/5721/5536/files/Group_381.png?v=1702881781'>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "30px",
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "10px"
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "30px"
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }).on('setPosition', function (event, slick) {

    // if (window.matchMedia("(min-width:767px)").matches){
      // slick.$slides.css('height', slick.$slideTrack.height() + 'px');

      slick.$slides.css('height', 'auto');
      // Get the maximum height among all slides
      var maxHeight = 0;
      slick.$slides.each(function () {
        var slideHeight = $(this).height();
        maxHeight = Math.max(maxHeight, slideHeight);
      });
  
      // Set the height of all slides to the maximum height
      slick.$slides.css('height', maxHeight + 42 + 'px');
    // }
  });
});
  
      

$( document ).ready(function() {
// Initialize Slick slider if window width is less than or equal to 767 pixels
if (window.matchMedia("(max-width:767px)").matches) {
    $('.custom-video .icons-row__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      centerMode: true,
      centerPadding: "30px",
      variableWidth: true,
      dots: true
    });
  } else {
    // Unslick the slider if window width is greater than 767 pixels
    // $('.custom-video .icons-row__slider').slick('unslick');
  }
  
  // Reinitialize Slick slider on window resize
  $(window).on('resize', function () {
    if (window.matchMedia("(max-width:767px)").matches) {
      // If window width is less than or equal to 767 pixels, initialize Slick
      $('.custom-video .icons-row__slider:not(.slick-initialized)').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        variableWidth: true,
        dots: true
      });
    } else {
      // If window width is greater than 767 pixels, unslick the slider
      // $('.custom-video .icons-row__slider.slick-initialized').slick('unslick');
    }
  });

      // // Add an event listener for the afterChange event
      // $('.custom-video .icons-row__slider').on('afterChange', function(event, slick, currentSlide){

      //   var activeSlideId = $('.slick-slide[data-slick-index="' + currentSlide + '"]').attr('id');
      //   console.log('Active Slide ID:', activeSlideId);

      //   document.querySelectorAll('.custom-video .video-div video').forEach(video => {
      //     video.pause();
      //   });

      //   document.querySelector('.custom-video .slick-slide[data-slick-index="' + currentSlide + '"] .video-div video').play();

      // });
  

});


// // Initialize the slick slider
// $('.custom-video .icons-row__slider').slick({
//   // your slick options here
// });

  // tab section slider 


  $(document).ready(function () {
    // Initialize Slick for contents
    $('.custom_tab_section .tabs__contents').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: "<img class='a-left control-c prev slick-prev' src='https://cdn.shopify.com/s/files/1/0566/5721/5536/files/Group_18.svg?v=1702970276'>",
      nextArrow: "<img class='a-right control-c next slick-next' src='https://cdn.shopify.com/s/files/1/0566/5721/5536/files/Group_17.svg?v=1702970276'>",
      dots: true,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.custom_tab_section .tabs__nav'
    });
  
    // Initialize Slick for navigation
    $('.custom_tab_section .tabs__nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.custom_tab_section .tabs__contents',
      centerMode: false,
      infinite: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  




  });
  


  // var video = document.getElementById("my_video1");
  // video.play();
  // // Add an event listener for the afterChange event
  // $('.custom_tab_section .tabs__contents').on('afterChange', function(event, slick, currentSlide){
  //   var activeSlideId = $('.slick-slide[data-slick-index="' + currentSlide + '"]').attr('id');
  //   console.log('Active Slide ID:', activeSlideId);
  //   document.querySelectorAll('.custom_tab_section .video-div video').forEach(video => {
  //     video.pause();
  //   });
  //   document.querySelector('.custom_tab_section .slick-slide[data-slick-index="' + currentSlide + '"] #my_video1').play();
  // });
  // On slide change, pause all videos