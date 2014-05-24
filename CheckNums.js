function CheckNums(num1,num2) { 
  var counter = "";
  if (num1 < num2){
    counter = true;
 
  } else if ( num1 == num2){
  
    counter = -1;
  } else{
  
   counter = false
  }
  // code goes here  
  return counter; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CheckNums(readline());           
