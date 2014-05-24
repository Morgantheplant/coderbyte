function ABCheck(str) { 
var test = false;
  for (var i = 0; i < str.length; i++){
  
    if( str[i] == "a" && str[i+4] == "b"){
    
      test = true;
    
    }
  
  }
  // code goes here
  str = test;
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
