function fizzbuzz(numb){
	var fizz_buzz = "";
	if (numb % 3 == 0){      // Number divisible by three remainder zero
		fizz_buzz += "Fizz"; // Returns Fizz
	}
	if (numb % 5 == 0){      // Number divisible by five remainder zero
		fizz_buzz += "Buzz"; //  Returns Buzz
	}
	if (fizz_buzz){          //Number divisible by 15 will also be divisible by three and five with remainder zero
		return fizz_buzz;    // Return fizz_buzz
	}
	else{
		return numb;         //Return number if it is indivisible by three and five
	}

}
module.exports = fizzbuzz;