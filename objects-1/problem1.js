//Given an array find the unique items in the array

 var arr=[9,5,5,0,8,4,5,5,8,0];
 var obj={};
for(var i=0;i<=arr.length-1;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }else{
    obj[arr[i]]++;
  }
}
console.log(obj)