const a = 'saras';

function checkPalindrome(s) {
const aV = s.split('');
const rAV = aV.reverse();
const rS = rAV.join('');

if(s == rS) {
console.log('It is a palindrome');
}
else {
console.log('It is not a palindrome');
}
}
checkPalindrome(a);