$(document).ready( function () {

	console.log("ready!");

	// creating variables 
	var para = document.createElement("p");
	var test = document.getElementById("test");

	// adding new elements to html
	para.innerHTML = "This is sample text";
	test.appendChild(para);
	console.log("added sample text to a new para element");
});