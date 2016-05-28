$(document).ready( function () {
	
	// creating variables 
	var newPara = document.createElement("p"); // New paragraph
	var test = document.getElementById("test"); // Existing Section
	var text = ""; // Variable for text
	var i= 0; // Variable for number count
	var uInput = ""; // Variable for storing user provided number
	

/*
	// If type of input is not number, ask again
	while (typeof uInput !== "number") {
		uInput = prompt("Please provide an integer between 1 and 100 in NUMERICAL FORMAT");	//works with parseInt incorrectly, otherwise does not work at all
		console.log('Re-asked for user input');
	};

	if (uInput % 1 != 0) {
		uInput = +uInput;
		console.log(uInput); //not working
	};
*/
	
	
	Math.ceil(uInput);
	do {
		uInput = prompt("Please provide an integer between 1 and 100");
		 var vInput = Math.ceil(uInput);
		//add functionality to ask again
		console.log("initial entry was not a number");
	}
	while ( vInput % 1 !== 0 );
	



	// loop to list 100 numbers
	while (i< vInput) {
		i++; // increment by 1
	
		var three = i % 3; // remainder when divided by 3
		var five = i % 5; // remainder when divided by 5

		if (three == 0 && five == 0) { // divisible by 15
		text += "Fizz Buzz" + "<br>"
		}

		else if (three == 0) { // divisible by 3
		text +=  "Fizz" + "<br>"
		}

		else if (five == 0) { // divisible by 5
		text +=  "Buzz" + "<br>"
		}

		else { // not divisible by either 3 or by 5
			text +=  i + "<br>"
		}

		console.log('added number');
	};

	// adding new elements to html
	newPara.innerHTML = text; // added text to paragraph body
	test.appendChild(newPara); // added paragraph to existing section
	console.log("added text to new para");

});