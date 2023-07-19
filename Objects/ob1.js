const arr = ['radhe', 22, 'M', 'radha@gmail.in'];
const obj = {};

arr = [obj.name, obj.age, obj.gender, obj.email];

for (let key in obj) {
  console.log (key + ' : ' + obj[key]);
} 