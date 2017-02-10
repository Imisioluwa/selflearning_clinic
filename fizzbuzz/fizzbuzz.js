// Function that determines if a number is divisible by 3 and or 5
function fizzbuzz(numB){
  var fizz_buzz = "";
  if (numB === 0){
  	return 0;
  }
  if (!Number.isInteger(numB) || numB < 0){
  	return "ValueError, Positive Integer input required";
  }
  // Number divisible by three remainder zero
  if (numB % 3 === 0){      
  // Returns Fizz
    fizz_buzz += "Fizz"; 
  }
  // Number divisible by five remainder zero
  if (numB % 5 === 0){ 
  //  Returns Buzz     
    fizz_buzz += "Buzz"; 
  }
  //Number divisible by 15 will also be divisible by three and five with remainder zero
  if (fizz_buzz){  
  // Return fizz_buzz        
    return fizz_buzz;    
  }
  else{
  //Return number if it is indivisible by three and five
    return numB;         
  }

}
module.exports = fizzbuzz;