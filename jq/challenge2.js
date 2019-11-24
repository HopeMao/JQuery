
$(document).ready(function() {
	$("#useBilling").click(function(){
    console.log("here");

    if (this.checked){
      $("#home").val($("#billing").val());
      $("#home").attr("disabled", true);
    }

    else {
      $("#home").val("");
      $("#home").attr("disabled", false);
    }

  });

});
