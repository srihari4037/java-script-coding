//Given a string print, the number of times each character appears

var string="srihari";
var obj={};

for(var i=0;i<=string.length-1;i++){
  if(obj[string[i]]==undefined){
    obj[string[i]]=1;
  }else{
    obj[string[i]]++;
  }
}
console.log(obj)