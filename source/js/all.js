//= require jquery
//= require bootstrap-sprockets
//= require_tree .

// Init skrollr and disable on mobile
if(Modernizr.touch){
	var s = skrollr.init();
	s.destroy();
}

( function( $ ) {

	function enableSkrollr() {
		// Enable Skroll only for non-touch devices
		if(!Modernizr.touch){
			var s = skrollr.init({forceHeight: false});
		}
	}

	function disableSkrollr() {
		// Destroy Skrollr
		var s = skrollr.init();
		s.destroy();
	}

	enquire.register("screen and (min-width: 768px)", {
		match : function() {
			enableSkrollr();
		},  
		unmatch : function() {
			disableSkrollr();
		}
	});

} )( jQuery );

// Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#music-gallery])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
