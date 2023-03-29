const calculateAllPrimes = (number) => {
  let primes = [];
  for (let i = 2; i < number; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) primes.push(i);
  }
  return primes;
};

export default calculateAllPrimes