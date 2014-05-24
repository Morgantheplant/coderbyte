function LetterCountI(str) { 

  var arr = str.split(" ");
  
  var dupCount = [];
  
  for (var k = 0; k < arr.length; k++) {
  
    var stringer = arr[k];
    var holder = 0;
        
        for (var i = 0; i < stringer.length; i++ ){
          var count = 0;
          
            for (var j = 0; j < stringer.length; j++){
              if(stringer[i] == stringer[j]){
              
              count++;
                
                if(count > holder){
                
                holder = count;
                }
                
              }
            
          
            }
    
    
    
        }
  
  dupCount.push(holder + stringer);
  
  
  }
  
  dupCount.sort();
  
  var str = dupCount.pop();
  
  if (str[0] == 1){
  
    str = -1;
  
  } else {
  
    str = str.replace(/\d+/g,"");
  
  }
  
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());           
