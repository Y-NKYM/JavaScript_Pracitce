$(document).ready(function () {
  // $('body').html('<h1>Hello jQuery!!</h1>');
  // $('.box1').css({
  //   'background-color': '#0000FF',
  //   'height': '100px'
  // });
  // $('.box1').slideDown(function(){
  //     $('.box1').css({
  //     'background-color': 'blue',
  //     'width': '200px',
  //     'height': '100px'
  //     }).slideUp();
  //     });
  // $('.box1').mouseover(function(){
  //   $('.box1').css('background', 'blue');
  // });
  // $('.box1').mouseout(function(){
  //   $('.box1').css('background', 'red');
  // });
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});