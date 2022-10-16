//Problem 4: Write a function to check if the char is a small case or not.

function small(char){
  let small_char="abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<=small_char.length-1;i++){
    if(char==small_char[i]){
      return true
    }
  }
}

let y=small("g");
if(y==true){
  console.log("yes");
}else{
  console.log("no");
}