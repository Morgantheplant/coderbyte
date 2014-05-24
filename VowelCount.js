function VowelCount(str) { 
  var counter = 0;
  for(var i = 0; i < str.length; i++){
    if ( str[i] == "a"|| str[i] == "A" || str[i] == "e" || str[i] == "E" || str[i] == "i" || str[i] == "I" || str[i] == "o" || str[i] == "O" || str[i] == "u" || str[i] == "U"){
     counter++
   
    }
  
    
  } 
  str = counter
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
