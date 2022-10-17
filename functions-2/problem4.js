  //Write code to calculate the average of an array

  //If there are no items in the array it should return 0
  //NOTE: Create a function to find the sum of elements in an array and 
  //use that function to find out the average





function average(a){
  let count=0;
  let sum=0;
  if(a==0)
    return 0;

  for(let i=1;i<=a.length; i++){
    sum=sum+i;
    count++;
  }
  let x=Math.floor(sum/count);
  console.log(x);
}

let arr=[1,2,3,4];
average(arr);