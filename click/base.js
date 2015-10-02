console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('span').click(function(){
		var $list = $(this).text() + " at " + Date.now();
		$('ul').append("<li>" + $list + "</li>");
	});
});
