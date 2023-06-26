$(document).ready(function () {
  // $('body').html('<h1>Hello jQuery!!</h1>');
  // $('.box1').css({
  //   'background-color': '#0000FF',
  //   'height': '100px'
  // });
  $('.box1').slideDown(function(){
      $('.box1').css({
      'background-color': 'blue',
      'width': '200px',
      'height': '100px'
      }).slideUp();
      });
});