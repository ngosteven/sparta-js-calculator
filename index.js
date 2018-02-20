alert("Welcome to calculator");

var typeCalculator = prompt("Choose (s)imple / (a)dvanced / (b)mi / (t)rip");
console.log(typeCalculator);

if (typeCalculator == "s"){

	console.log("Simple")

	alert("Welcome to simple calculator");

	var stotal;

	var sgetFirstNumber = prompt("Choose the first number");
	console.log(sgetFirstNumber);

	var soperateSum = prompt("Choose which operator, (1)Addition, (2)Subtraction, (3)Multiplication, (4)Division");
	console.log(soperateSum);

	if (soperateSum == "1"){

		var sgetSecondNumber = prompt("Add");
		console.log(sgetSecondNumber);

		stotal = (parseFloat(sgetFirstNumber) + parseFloat(sgetSecondNumber));
		console.log(stotal);
		alert("The answer is " + stotal);

	} else if (soperateSum == "2"){

		var sgetSecondNumber = prompt("Subtract");
		console.log(sgetSecondNumber);

		stotal = (parseFloat(sgetFirstNumber) - parseFloat(sgetSecondNumber));
		console.log(stotal);
		alert("The answer is " + stotal);

	} else if (soperateSum == "3"){

		var sgetSecondNumber = prompt("Multiplied by");
		console.log(sgetSecondNumber);

		stotal = (parseFloat(sgetFirstNumber) * parseFloat(sgetSecondNumber));
		console.log(stotal);
		alert("The answer is " + stotal);

	} else if (soperateSum == "4"){

		var sgetSecondNumber = prompt("Divided by");
		console.log(sgetSecondNumber);

		stotal = (parseFloat(sgetFirstNumber) / parseFloat(sgetSecondNumber));
		console.log(stotal);
		alert("The answer is " + stotal);

	}

} else if (typeCalculator == "a"){

	console.log("Advanced")

	alert("Welcome to advanced calculator");

	var atotal;

	var aoperateSum = prompt("Choose which operator, (1)Addition, (2)Subtraction, (3)Multiplication, (4)Division, (p)ower, square (r)oot");
	console.log(aoperateSum);

	if (aoperateSum == "1"){

		var agetFirstNumber = prompt("Choose the first number");
		console.log(agetFirstNumber);

		var agetSecondNumber = prompt("Add");
		console.log(agetSecondNumber);

		atotal = (parseFloat(agetFirstNumber) + parseFloat(agetSecondNumber));
		console.log(atotal);
		alert("The answer is " + atotal);

	} else if (aoperateSum == "2"){

		var agetFirstNumber = prompt("Choose the first number");
		console.log(agetFirstNumber);

		var agetSecondNumber = prompt("Subtract");
		console.log(agetSecondNumber);

		atotal = (parseFloat(agetFirstNumber) - parseFloat(agetSecondNumber));
		console.log(atotal);
		alert("The answer is " + atotal);

	} else if (aoperateSum == "3"){

		var agetFirstNumber = prompt("Choose the first number");
		console.log(agetFirstNumber);

		var agetSecondNumber = prompt("Multipied by");
		console.log(agetSecondNumber);

		atotal = (parseFloat(agetFirstNumber) * parseFloat(agetSecondNumber));
		console.log(atotal);
		alert("The answer is " + atotal);

	} else if (aoperateSum == "4"){

		var agetFirstNumber = prompt("Choose the first number");
		console.log(agetFirstNumber);

		var agetSecondNumber = prompt("Divided by");
		console.log(agetSecondNumber);

		atotal = (parseFloat(agetFirstNumber) / parseFloat(agetSecondNumber));
		console.log(atotal);
		alert("The answer is " + atotal);
		
	} else if (aoperateSum == "p"){

		var agetFirstNumber = prompt("Choose the first number");
		console.log(agetFirstNumber);

		var agetSecondNumber = prompt("To the power of");
		console.log(agetSecondNumber);

		atotal = (Math.pow(agetFirstNumber, agetSecondNumber));
		console.log(atotal);
		alert("The answer is " + atotal);
		
	} else if (aoperateSum == "r"){

		var agetFirstNumber = prompt("Choose the first number");
		console.log(agetFirstNumber);

		atotal = (Math.sqrt(agetFirstNumber));
		console.log(atotal);
		alert("The answer is " + atotal);
		
	}

/*BMI Calculator
Calculate the BMI when given the height and weight - the user should be able to choose between the imperial and the metric system
- BMI Link 1
- BMI Link 1

To work out your BMI:

divide your weight in kilograms (kg) by your height in metres (m)
then divide the answer by your height again to get your BMI

SUPER Bonus task
Add the following calculator feature into your app.
Trip Calculator
This feature asks the user for four inputs; distance, fuel efficiency (mpg), cost per gallon, speed and it will give you the time and price of your journey.
Example output: "Your trip will take 3.5 hours and cost £255.33.""
Note: For every 1 MPH over 60 MPH, reduce the the MPG by 2 MPG (i.e. a car that normally gets 30 mpg would only get 28 mpg if its speed were 61 mph. Yes this gets silly at high speed where mpg goes to zero or gets negative - how will you handle this?)
*/
} else if (typeCalculator == "b"){

	console.log("BMI")

	alert("Welcome to BMI calculator");

} else if (typeCalculator == "t"){

	console.log("Trip")

	alert("Welcome to trip calculator");	

}
