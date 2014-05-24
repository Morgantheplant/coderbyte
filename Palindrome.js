function PalindromeTwo(str) { 

  var newt = str.replace(/[\W\s]+/g,"").toUpperCase();
  var revt = newt.split("").reverse().join("").toUpperCase();
  
  // code goes here  
  if (newt == revt){
  return true;
  } 
  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           
