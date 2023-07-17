function isPalindrome(str) {
const characters = Array.from(str);

for (let i = 0; i < Math.floor(characters.length / 2); i++) {
  if (characters[i] !== characters[characters.length - 1 - i]) {
     return "NO";  }
    }
    return "YES";
}

const input1 = "Sarath";
const input2 = "Saras";

console.log(isPalindrome(input1));
console.log(isPalindrome(input2));

 