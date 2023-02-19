//While loop
function fact(n) {
    if(n==0 || n==1){
      return 1;
    }
    
    var result = n;
    while(n > 1){
      result = result * (n-1);
      n = n -1;
    }
    return result;
  }
  
  console.log(fact(0));
  
  //Recursion
  function factorial(x) {
    if(x == 1 || x== 0) {
      return 1;
    }
    else {
        return x * factorial (x-1)
    }
  }
  
  console.log(factorial(5));