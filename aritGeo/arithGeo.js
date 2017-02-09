function aritGeo(numarray){   // Function aritGeo holding a single parameter which is an array of numbers
	if (numarray == 0){   // If array is empty then the function returns zero
		return 0;
	} 
	var ratio = numarray[1]/numarray[0];//second element in the array divided by the first array is equal to ratio
	var difference = numarray[1] - numarray[0]; //first element in the array substracted from second element in the array
	for (var index = 1; index < numarray.length - 1; index++){  // Looping through the array 
		if (numarray[index + 1]/numarray[index] != ratio){ // Break the if condition when the third element in the array divided 
			break;                                         // by the second element is not equal to "ratio"
		}
		if (index == numarray.length - 2){                 // Compare index to the last element of the array 
			return "Geometric";
		}
    }
    for (var index = 1; index < numarray.length - 1; index++){ // Looping through the array
    	if (numarray[index + 1] - numarray[index] != difference){ // Break the if condition when the third element in the array divided
    		break;                                                // by the second element is not equal to "difference"
        }
        if (index == numarray.length - 2){                        // Compare index to the last element of the array
        	return "Arithmetic";
        }
    }
    return -1;                                      // The function returns -1 if the array is neither Arithmetic or Geometric
}
module.exports = aritGeo;