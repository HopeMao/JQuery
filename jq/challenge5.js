
var imgs = $("img");
var msg = "Hover over an image below."
// note: some images load kind of slow b/c of their size
// so you might have to pause the mouse over some images to let them load

for (let i = 0; i < imgs.length;i++){
	imgs[i].onmouseover = function() {
	 	$('#image').css("backgroundImage", "url('"+imgs[i].src+"')");
	 	$('#image').html(imgs[i].alt);
	 }

	 imgs[i].onfocus = function() {
		 $('#image').css("backgroundImage", "url('"+imgs[i].src+"')");
		$('#image').html(imgs[i].alt);
	 }

	 imgs[i].onmouseleave = function() {
		 $('#image').css("backgroundImage", "url('')");
		$('#image').html(msg);
	 }

	 imgs[i].onblur = function() {
		 $('#image').css("backgroundImage", "url('')");
		$('#image').html(msg);
	 }
}
