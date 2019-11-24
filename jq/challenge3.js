
console.log( $('input[name="fruit"]:checked') );


$("#ch3form").submit(function(e){

  if ( $('input[name="fruit"]').is(':checked') && $('input[name="standing"]').is(':checked') ){
    console.log("here");
    return true;
  }

  else {
  alert("You must pick at least one fruit and one class standing!");
  e.preventDefault();
  }

});
