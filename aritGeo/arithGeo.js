// Function aritGeo holding a single parameter which is an array of numbers
function aritGeo(numArray){  
// If array is empty then the function returns zero 
  if (numArray.length === 0){   
    return 0;
  } 
  //second element in the array divided by the first array is equal to ratio
  var ratio = numArray[1]/numArray[0];
  //first element in the array substracted from second element in the array
  var difference = numArray[1] - numArray[0];
  // Looping through the array 
  for (var index = 1; index < numArray.length - 1; index++){
  // Break the if condition when the third element in the array divided   
    if (numArray[index + 1]/numArray[index] != ratio){  
	  // by the second element is not equal to "ratio"
	  break;                                         
	}
	// Compare index to the last element of the array
	if (index === numArray.length - 2){                  
	  return "Geometric";
	}
  }
  // Looping through the array
  for (var index = 1; index < numArray.length - 1; index++){ 
  	// Break the if condition when the third element in the array divided
    if (numArray[index + 1] - numArray[index] != difference){ 
      // by the second element is not equal to "difference"
      break;                                                
    }
    // Compare index to the last element of the array
    if (index === numArray.length - 2){                        
      return "Arithmetic";
    }
  }
  // The function returns -1 if the array is neither Arithmetic or Geometric
  return -1;
}

module.exports = aritGeo;