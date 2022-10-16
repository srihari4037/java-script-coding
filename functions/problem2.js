//Problem 2: Use the above function to print the Primes from 2 to a given limit

function check_prime(num){
  let factors=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      factors++;
  }
  }

  if(factors==2){
    return true;
  }else{
    return false;
  }
}

for(let i=2;i<=56;i++){
  let x=check_prime(i);
  if(x==true){
    console.log(i,"prime");
  }
}
