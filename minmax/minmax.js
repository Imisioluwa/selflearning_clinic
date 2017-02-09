function findMinMax(numarrays){  //Function findMinMax taking a single parameter which is an array of numbers
	var min = numarrays[0];      // Variable min initially assigned to the first element in the array
	var max = numarrays[0];      // Variable max initially assigned to the first element in the array
	if (!Array.isArray(numarrays) || numarrays.length == 0){ // If the array is not an array of numbers or the length of array is equal to zero
		return "Value Error, An Array is expected";   // Return an error message
	}
	for (count = 1; count < numarrays.length; count++) { // Loop through the array
		if (numarrays[count] > max){                     // Elements compared to the first element in the array and if greater
			max = numarrays[count];                      // Return higher valued numbers into max
		} 
		if (numarrays[count] < min){                     // Elements compared to the first element in the array and if lesser
			min = numarrays[count];                      // Return lower valued numbers into min
		}
	}
    if (min == max){                                    //If min value is equal to max value then min value should be returned
    	return [min];

    }
    return [min, max];                                 // The function returns a single minimum and maximum value in an array
}
module.exports = findMinMax;