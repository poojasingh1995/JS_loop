const num = 24;
const isPrime = n => {
   if (n===1){
      return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return false;
         }
      }
      return true;
   };
};
const nearestPrime = num => {
   while(!isPrime(++num)){};
   return num;
};
console.log(nearestPrime(24));