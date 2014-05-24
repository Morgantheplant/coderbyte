function TimeConvert(num) { 
  var hour = Math.floor(num/60);
  var minute = (num%60);
  
  var num = hour + ":" + minute;
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());           
