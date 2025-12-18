const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//soluzione con filter

//versione function
const odd = nums.filter(function(numeri) {
    return numeri % 2 === 0
} )

console.log(odd);

//versione arrow function

const pari =nums.filter(numeri => numeri % 2 === 0)

console.log(pari);
