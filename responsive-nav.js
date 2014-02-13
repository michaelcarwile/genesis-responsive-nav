jQuery(document).ready(function($) {

  $("#menu-primary-navigation").before('<div id="primary-menu-icon"></div>');
	$("#primary-menu-icon").click(function() {
		$("#menu-primary-navigation").slideToggle();
	});
	$(window).resize(function(){
		if(window.innerWidth > 1024) {
			$("#menu-primary-navigation").removeAttr("style");
		}
	});

});
