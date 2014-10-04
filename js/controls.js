$(document).ready(function(){
    $(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.top').click(function(){
		$('html, body').animate({scrollTop : 0},'fast');
		return false;
	});
});