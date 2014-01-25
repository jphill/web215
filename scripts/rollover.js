$(document).ready(function() {
	$("#gallery img").each(function() {
		console.log("looping through image");
		var imgFile = $(this).attr("src");
		var preloadImage = new Image();
		var imgExt = /(\.\w{3,4}$)/;
		preloadImage.src = imgFile.replace(imgExt,"color$1");
		
		$(this).hover(
			function() {
				$(this).attr("src", preloadImage.src);
			},
			function() {
				$(this).attr("src", imgFile);
			}
		);//end hover
	});//end each
}); //end ready