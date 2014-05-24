function SwapCase(str) { 

  var oldArray = str.split("");
  var newArray = [];
  
  for (var i = 0; i < str.length; i++){
  
    if(oldArray[i] === oldArray[i].toUpperCase()){
    
    newArray.push(oldArray[i].toLowerCase());
    
    } else if (oldArray[i] === oldArray[i].toLowerCase()) {
    
    newArray.push(oldArray[i].toUpperCase());
    
      
    } else {
    
      newArray.push(oldArray[i]);
    }
  
  
  
  }
  
  str = newArray.join("");
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
