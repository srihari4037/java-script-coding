//Problem 3 : Given an array of numbers find the average of all the even numbers

var arr=[1,2,3,4,5,6,7,8,9,10];
sum=0;
count=0;
for(var i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}console.log(sum/count);