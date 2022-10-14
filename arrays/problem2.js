 //Problem 2 : Given a character in lower case print the upper case character

var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
          "o","p","q","r","s","t","u","v","w","x","y","z"];
var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
           "P","Q","R","S","T","U","V","W","X","Y","Z"];
var char="j"
for(var i=0;i<=lower.length-1;i++){

if(char==lower[i]){
  console.log(upper[i])
}
  
}