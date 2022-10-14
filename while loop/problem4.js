//Problem 4: Print the average of even numbers from 1 to 100 (both included)

var start=1;
var end=100;
sum=0;
count=0;
while(start<=end){
  if(start%2==0){
    sum=sum+start;
    count++
  }
  start++;
  
} console.log(sum/count);