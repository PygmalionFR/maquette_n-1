$(document).ready(function(){
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      adaptiveHeight: true,
    });

    $('.slider2').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        adaptiveHeight: true,
    });
  });