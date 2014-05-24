function SimpleSymbols(str) { 

  var converted = str.replace(/\w+/g, "X").replace(/[\s\=]+/, "");
  
  var test = false;
  
  for (var i = 0; i < converted.length; i++){
  
    if (converted[i] == "X"){
    
      if (converted[i-1] == "+" && converted[i+1] == "+" || converted < 3){
      
      test = true;
        
        break;
      }
    
    }
  
  }
  
 str =  test;
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
