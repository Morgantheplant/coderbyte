function CountingMinutesI(str) { 


var arr = str.split(/[:-]+/g);


var hour1, hour2, minutes2;

var minutes1 = arr[1].substr(0,2);

arr[1][2]=="a" ? hour1 = arr[0] : hour1 = parseInt(arr[0]) + 12;





var minutes2 = arr[3].substr(0,2);

arr[3][2]=="a" ? hour2 = arr[2] : hour2 = parseInt(arr[2]) + 12;



var timemin1 = parseInt(hour1*60) + parseInt(minutes1); 
var timemin2 = parseInt(hour2*60) + parseInt(minutes2); 

var diff = 0;
  
  if (timemin1 > timemin2) {
  
  diff = 1440 - (timemin1 - timemin2)
  
  } else if (timemin1 < timemin2 ) {
  
  diff = timemin2 - timemin1;
  }
      
  return diff
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());           
