//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.

var arr=[1,2,3,4,5,6];
bag="";

for (var i=1;i<=arr.length-1;i++){
  bag=bag+arr[i]+" ";
}
console.log(bag)
