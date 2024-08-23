$(document).ready(function(){
    $('.slider').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 400
    });

    $('.slider2').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 400
    });
  });