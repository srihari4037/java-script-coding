//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function not_prime(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
    if(count!==2){
      return true;
    }else{
      return false;
    }
  }

for(let i=2;i<=56;i++){
  let x=not_prime(i);
  if(x==true){
    console.log(i,"not prime")
  }
}
