//Problem-6
//Given a string swap the case and print the output
//Sample Input - Test
//Sample Output - tEST
//NOTE: Use multiple functions to achieve the result, NOT one single code block

  function swap(x){
  let str=x;
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let new_swap="";
  for(let i=0;i<=str.length-1;i++){
    let char=str[i];
    for(let j=0; j<upper.length-1;j++){
      if(char==upper[j]){
        new_swap+=lower[j];
        }else if(char==lower[j]){
        new_swap+=upper[j];
        break;
        }
    }
  }
  return new_swap;
}
let x="SriHari";
console.log(swap(x));
