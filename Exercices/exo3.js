function getPrimeNumbers(arr) {
    const primes = arr.filter(function (el) {
        let isPrime = true;
        for(let i = 2; i < el; i++) {
            if(el % i === 0 ) {
                isPrime = false;
                break;
            }
        }
        return isPrime
    });
    return primes;
}

console.log( getPrimeNumbers([2, 5, 10, 11, 20, 17, 97])); // 2 5 11 17 97