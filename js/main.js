$(document).ready(function(){
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });

    $('.slider2').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600
    });
  });