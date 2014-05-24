function ExOh(str) { 

  var counterX = 0;
  var counterO = 0;
  
  for(var i = 0; i < str.length; i++){
  
    if(str[i] == "x"){
    
    counterX++;
      } else if (str[i] == "o"){
      
        counterO++;
      
      }
   
  
  }
  
  
  if (counterX == counterO){
  str = true;
  
  }  else {
  
  str = false;
  }
  
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
