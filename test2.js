function calculateAverage(marks) {

let sum = 0;

for (let i = 0; i < marks.length; i++) {
sum += marks[i];
}
const average = sum / marks.length;
return average;
}

const marks = [83, 96, 76, 91, 77];
const average = calculateAverage(marks);

console.log(average);  