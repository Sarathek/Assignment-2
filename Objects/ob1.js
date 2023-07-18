let a = ['Radha',22,'M'];
let employee = {
Name:'',age:null,gender:''
}
let i=0;

for (key in employee)
{
employee[key]=a[i];
i++;
}

console.log (employee)