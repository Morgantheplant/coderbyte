function MeanMode(arr) { 

  var compare = function(a,b){
  
    if (a > b) {
    return -1;
      
    } else if (b > a) {
    return 1
      } else {
      
      return 0;
        
      }
    
  }
  
 arr.sort(compare);
 
  var myArray = [];
  var sum = 0;
  var count = 0;
  
  
  for (var i = 0; i < arr.length; i++){
  sum += arr[i];
    
    if (arr[i] == arr[i+1]){
    count++;
      myArray.push(count+"-"+arr[i]);
      
    } else {
      count = 0;
    }
  
  }
  
  myArray.sort();
  
 
  var mean = sum/arr.length;
  var mode = 0;
  var test = 0;
  if (myArray.length > 0){
  
   mode = myArray[myArray.length-1].split("-");
  
  }
  
  
  if (mean == mode[1]){
  
    test = 1;
  
  }
  
  // code goes here  
  return test; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           
