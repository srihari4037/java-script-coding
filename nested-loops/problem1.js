//problem 1: Print the Calendar date in the below format

var month=12;
var days=31;

for(var month=1;month<=12;month++){
   if(month==2){
      days=28;
    }else if(month==1 || month==5 || month==8 || month==11){
     days=30;
    }else{
     days=31;
    }
  for (var day=1;day<=days;day++){
   
   
    console.log(month+"-"+day);
  }
}


