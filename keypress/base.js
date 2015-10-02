console.log("Sanity Check: JS is working!");

var startTime;
var endTime;
var totalTime;

$(document).ready(function() {
	$(document).keydown(function() {
		if (startTime) {
			endTime = Date.now();
			totalTime = endTime - startTime;
			$('#total-time').text(totalTime);
		} else {
			startTime = Date.now();
		}
	});
	// $('body').append("<h3>" + startTime + "</h3>");
});
