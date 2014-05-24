function PrimeTime(num) { 
  
  var test = true;
  
  for (var i = 2; i < num/2; i++){
    
    if(num%i == 0)
  
    test = false;
  } 

  num = test;
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());           
