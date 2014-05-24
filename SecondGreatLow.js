function SecondGreatLow(arr) { 

  arr.sort(function(a,b){
    if (a>b){
    return -1;
    } else if (b>a){
      return 1;
      } else {
      return 0;
      }
    });
  
  var myArray =[];
  
  for (var i = 0; i < arr.length; i++){
    if(arr[i] != arr[i+1]){
    myArray.push(arr[i]);
    }
   }
  
  var str = myArray[myArray.length-2] + " " + myArray[1];
  
  if (arr.length == 2){
   str = arr[0] +" "+ arr[1];
   }
  
  return str; 
         
}
         

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           
