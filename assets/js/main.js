$('.cross').hide();
$('.mini-nav').hide();
$('.hamburger').hide();

$( '.hamburger' ).click(function() {
    $( ".mini-nav" ).slideToggle( "fast", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
  });

$('.cross').click(function(){
 $( ".mini-nav" ).slideUp( "fast", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
});


// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 600px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    console.log("BIG");
    $('.hamburger').hide();
    $('.cross').hide();
	$('.mini-nav').hide();
  } else {
    console.log("LESS");
    $('.hamburger').show();
  }
}
