$(document).ready( function () {

	console.log("ready!");
	$(".test").prepend ('<p>new text!</p>');
	console.log("changed html");

});