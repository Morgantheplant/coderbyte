function LongestWord(sen) { 

    var myArray = sen.replace(/\W+/g, " ").split(" ");
    var newArray = [];
  for(var i = 0; i < myArray.length; i++){
    
    newArray.push(myArray[i].length + "-" + myArray[i]);
  
    
  }
  
  var sorted = newArray.sort(function (a,b){
    if (parseInt(a) > parseInt(b)){
    
      return -1;
    
    } else if (parseInt(b) > parseInt(a)){
    return 1
    
      } else {
        
        return 0;
          
       }
  
  
  });
  
  
  
  // code goes here  
  return sorted[0].replace(/\d+\-/,""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
