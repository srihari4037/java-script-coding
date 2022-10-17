//Problem-3
//Write a function isOdd which returns a boolean value based on the number is odd or not
//Use this function to print the odd numbers from 0 to a given limit(included)


function check_odd(i){
  
  if(i%2==1){
    return true;
  }else{
    return false;
  }
}



for(let i=0;i<=30;i++){
  let odd=check_odd(i)
if(odd==true){
  console.log(i,"yes its ODD")
}else{
  console.log(i,"no its not ODD")
}
}