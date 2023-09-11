// Create a program that takes the satisfaction rates from costumers inside an array. The rate can be a number between 1 and 5. find the average rate , print different message for each rate.

const satisfactionRates = [2, 4, 2, 5, 4, 1, 3, 2, 1, 4, 3, 4, 4, 5, 2];

// first we will find the sum of all the rates

let sum = 0;

for (let i = 0; i < satisfactionRates.length; i++) {
  // i will be 0 to 14
  console.log("different number from the array", satisfactionRates[i]);
  sum = sum + satisfactionRates[i];
  console.log("The value of sum in every iteration:", sum);
}

console.log(sum); // 46

let average = sum / satisfactionRates.length;

// average = Math.floor(average);


console.log(average.toFixed(2)); // 3.066666666666667

// average < 2  costumers are not happy
// average >2 < 4 costumers are ok
// average > 4  costumers are happy

if (average < 2) {
  console.log("costumers are not happy");
} else if (average < 4) {
  console.log("costumers are ok");
} else {
  console.log("costumers are happy");
}
