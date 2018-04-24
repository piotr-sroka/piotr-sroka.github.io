$(document).ready(function() {
	
	var topContainer = $("#top-widget-wrapper");
	var topTrigger = $("#top-widget-open-close");

	topTrigger.click(function(){
		topContainer.animate({
			height: "toggle"
		});
		
		if (topTrigger.hasClass('tab-closed')){
			topTrigger.removeClass('tab-closed');
		} else {
			topTrigger.addClass('tab-closed');
		}
		
		return false;
		
	});

	var images = document.querySelectorAll(".image-hover");

	for (var i = 0; i < images.length; i++) {
		images[i].querySelector("div").addEventListener("mouseover", onOver);
		images[i].querySelector("div").addEventListener("mouseout", onOut);
	}

	function onOver(e) {
		var par = e.currentTarget.parentNode;
		$(par).animate({
			opacity: 1
		}, 200);
	}

	function onOut(e) {
		var par = e.currentTarget.parentNode;
		$(par).animate({
			opacity: 0
		}, 100);
	}

});