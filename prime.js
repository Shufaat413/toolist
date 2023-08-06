console.log("Hello! World")

function PrimeNumber(n){
    if (n < 2) {
        return `${n} is not a Prime Number`
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return `${n} is not a Prime number`
        }
    }
    return `${n} is Prime Number`
}
console.log(PrimeNumber(123))