//Problem 2: Print Prime Numbers from 1 to given limit

var limit=56;
for(var i=1;i<=limit;i++){
  count=0;
for(var j=1;j<=i;j++){
  if(i%j==0){
    count++;
   }
  
}
  if(count==2){
    console.log(i,"its prime");
  }else{
    console.log(i,"not a prime");
  }
}
