/*
	====================================================================================================
	
	NOTE: 
	Parts of code in the functions below could be optimized (e.g. error catching), but due to simplicity and
	demonstration purpose, it is kept as it is.
	
	The topic focused content is commented with the keyword "ATTENTION"
	
	====================================================================================================
*/



//Purpose: Calculates the Fibonacci sequence
function Fibonacci(index, list)
{
	
	if(index == 2)
	{
		//MONITOR
		//console.log(list);
		
		list.push(list[index-1] + list[index-2]);
	}
	else
	{
		/*
			ATTENTION: 
			Recursive call of the function "Fibonacci" 
		*/
		arguments.callee(index-1, list);
		list.push(list[index-1] + list[index-2]); 
		
		//MONITOR
		//console.log(list);
	}
}


//Purpose: Shows the maximum calculated value in the web browser
function Result(sum)
{

	var ShowResult = document.getElementById('result');
	var digits = [];
	var URL_Digits = sum.toString();
	
	//Clearing array
	digits.length = 0;

	
	//Clearing previous result
	while(ShowResult.firstChild)
	{
		ShowResult.removeChild(ShowResult.firstChild);
	}

	

	//Getting number of digits
	var numberOfDigits = Math.log(sum) * Math.LOG10E + 1;
	numberOfDigits = Math.floor(numberOfDigits)
	
	
	//
	for(var element = 0; element < numberOfDigits; element++)
	{
		
		
		//Type value 200 as user input and you`ll see there is an "e+41" behind the result
		//The array content stops at that point, but the number of digits are initially more than that.	
		if(typeof URL_Digits[element] !== "undefined")
		{
			//Creates an html image tag which will be used to show a digit from the result
			digits.push(document.createElement("IMG"));
			digits[element].src = "numbers/" + URL_Digits[element] + ".png";
			
			//Appending every digit as an html img tag
			ShowResult.appendChild(digits[element]);
		}
		
		
	}
	
}


//Purpose: Starts the calculation of Fibonacci sequence and shows the result in web browser
function Start()
{
	//Will contain all calculated fibonacci values
	var aftermath = [0,1];
	
	//The "+" operator is used to convert from string to number 
	var userInput = +document.getElementById('followup').value;
	
	
	Fibonacci(userInput,aftermath);
	
	Result(aftermath[userInput]);
	
}