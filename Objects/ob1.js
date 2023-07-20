const arr = ['radhe', 22, 'M', 'radha@gmail.in'];
const obj = {};

[obj.name, obj.age, obj.gender, obj.email] = arr;

for (let key in obj) {
  console.log (key + ' : ' + obj[key]);
} 