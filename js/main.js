
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

 $('.projects').hide();
  $('.pro-virt').on('click', function(){
       $(this).toggleClass('is-current');
    $('.projects').fadeToggle(200);
  });

});



