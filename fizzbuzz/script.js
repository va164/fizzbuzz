$(document).ready( function () {

	// creating variables 
	var newPara = document.createElement("p"); // New paragraph
	var test = document.getElementById("test"); // Existing Section
	var text = ""; // Variable for text
	var i= 0; // Variable for number count
	
	
	
	// loop to list 100 numbers
	while (i<100) {
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