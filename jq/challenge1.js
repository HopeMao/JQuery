

// https://www.w3schools.com/jquery/jquery_events.asp
$(document).ready(function() {
	$("#subscribe").click(function(){

		var email = $("#emailField");
		if (this.checked){
			email.css("display", "block");
			console.log("checked");
		}
		else {
			email.css("display", "none");
		}

		// FASTER:
			// $("#emailField").toggle("slow");

	});

});
