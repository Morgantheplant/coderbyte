function LetterCapitalize(str) { 
  
  var ary = str.split(" ");
  
  for (var i = 0; i < ary.length; i++){
    
        ary[i] = ary[i].split("");
        ary[i][0] = ary[i][0].toUpperCase();
        ary[i] = ary[i].join("");

    
  
  }
  // code goes here  
  return ary.join(" "); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
