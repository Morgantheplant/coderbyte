function ThirdGreatest(strArr) { 

  var myArray = [];
  for (var i = 0; i < strArr.length; i++){
  myArray.push(strArr[i].length+"-"+strArr[i])
  
  }
  
  myArray.sort(function(a,b){
    if(a>b){
    return -1;
    } else if(b>a){
    return 1;
    } else {
    return 0;
    }
  });
  
  myArray[2];
  
  // code goes here  
  return myArray[2].replace(/[\d\-]+/g,""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());           
