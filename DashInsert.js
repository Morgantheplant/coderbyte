function DashInsert(num) { 

  str = num.toString().split("");
  var newArray = [];
  
  for (var i = 0; i < str.length; i++){
    if (str[i]%2 != 0 && str[i+1]%2 != 0 && str[i] != str[str.length-1]){
    
      newArray.push(str[i]+"-");
    
    } else {
    
      newArray.push(str[i]);
    
    }
  
  }
  
  num = newArray.join("");
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
