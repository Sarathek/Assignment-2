function changeMultiplesOfThree(numbers) {
const changedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] % 3 === 0) {

    changedNumbers.push('multiple');
} else {
changedNumbers.push(numbers[i]);
}
}

return changedNumbers;
}

const numbers = [5, 9, 7, 12, 23, 18];
const changedNumbers = changeMultiplesOfThree(numbers);

console.log(changedNumbers);  