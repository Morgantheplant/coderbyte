function NumberAddition(str) { 

  var clean = str.replace(/[^0-9]+/g, ",").split(",");
  
  var sum = 0;
  
  for (var i = 0; i < clean.length; i++) {
  
    if(clean[i].length >= 1){
    
      sum += parseInt(clean[i]);
      
    }
  
  }
  str = sum
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
