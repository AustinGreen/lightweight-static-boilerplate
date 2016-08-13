//= require jquery
//= require_tree .

// Smooth Scroll
// $(function() {
//   $('a[href*=#]').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// Hide and show nav
$(document).ready(function(){
  // hide .navbar first
  $(".navbar-fixed").hide();
  
  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()) {
        $('.navbar-fixed').fadeIn();
      } else {
        $('.navbar-fixed').fadeOut();
      }
    });
  });
});