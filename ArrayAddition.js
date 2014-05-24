function ArrayAdditionI(arr) { 

  var sorted = arr.sort(function(a,b){
    if (a > b) {
        return -1;
    } else if(b > a){
    
      return 1;
    } else {
    
    return 0;
    }
  
  });
  
  var test = "false";
  var sum = 0;
  
  for (var i = 1; i < sorted.length; i++){
    
    sum += sorted[i];
  
  }
  
  if (sorted[0] == sum) {
  
    test = true;
  
  }
  
  arr = test;
  // code goes here  
  return arr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());           
