//Function findMinMax taking a single parameter which is an array of numbers
function findMinMax(numArrays){  
    // Variable min initially assigned to the first element in the array
  var min = numArrays[0];      
	// Variable max initially assigned to the first element in the array
  var max = numArrays[0];   
	// If the array is not an array of numbers or the length of array is equal to zero   
  if (!Array.isArray(numArrays) || numArrays.length === 0){ 
	// Return an error message
    return "Value Error, An Array is expected";   
  }
	// Loop through the array
  for (count = 1; count < numArrays.length; count++) { 
		// Elements compared to the first element in the array and if greater
    if (numArrays[count] > max){                     
	// Return higher valued numbers into max
	  max = numArrays[count];                      
	} 
	// Elements compared to the first element in the array and if lesser
	// Return lower valued numbers into min
	if (numArrays[count] < min){                     
			min = numArrays[count];                      
	}
  }
	//If min value is equal to max value then min value should be returned
    if (min === max){                                    
      return [min];

    }
    // The function returns a single minimum and maximum value in an array
  return [min, max];                                
}
module.exports = findMinMax;