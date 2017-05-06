// $('.cross').hide();
// $('.mini-nav').hide();
// $('.hamburger').hide();
//
// $( '.hamburger' ).click(function() {
//     $( ".mini-nav" ).slideToggle( "fast", function() {
// 	$( ".hamburger" ).hide();
// 	$( ".cross" ).show();
// 	});
//   });
//
// $('.cross').click(function(){
//  $( ".mini-nav" ).slideUp( "fast", function() {
// 	$( ".cross" ).hide();
// 	$( ".hamburger" ).show();
// 	});
// });
//
//
// // media query event handler
// if (matchMedia) {
//   var mq = window.matchMedia("(min-width: 600px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
// }
//
// // media query change
// function WidthChange(mq) {
//   if (mq.matches) {
//     console.log("BIG");
//     $('.hamburger').hide();
//     $('.cross').hide();
// 	$('.mini-nav').hide();
//   } else {
//     console.log("LESS");
//     $('.hamburger').show();
//   }
// }
//Scroll Magic
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
new ScrollMagic.Scene({triggerElement: ".p-content"}).addTo(controller);

//Smooth Scrolling for Navigation
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
