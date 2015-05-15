
$(document).ready(function(){

  $('.photo-journal').hide();
  $('.photos').on('click', function(){
    $(this).toggleClass('is-current');
    $('.photo-journal').fadeToggle(200);
  });


  $('.resume-or').hide();
  $('.edu-phys').on('click', function(){
       $(this).toggleClass('is-current');
    $('.resume-or').fadeToggle(200);
  });

  $('.form').hide();
  $('.talk').on('click', function(){
       $(this).toggleClass('is-current');
    $('.form').fadeToggle(200);
  });

});



