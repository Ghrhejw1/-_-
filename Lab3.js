1.
let admin, name;
name = "Джон";
admin = name;
alert(admin);

2.
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

a = parseInt(a);
b = parseInt(b);

alert(a + b);

3.
for (let i = 2; i <= 10; i += 2) 
{
  console.log(i);
}

4.
let i = 0;
while (i < 3)
 {
  alert(`number ${i}!`);
  i++;
}

5.
let number;

do {
  number = prompt("Введите число, большее 100", "");
} while (number <= 100 && number !== null);


6.
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime;
  }
  console.log(i);
}

Функции

1.
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseNumber(123));

function removeDuplicates(num) {
    return parseInt([...new Set(num.toString().split(''))].join(''));
}

console.log(removeDuplicates(111333456));


function countDigitOccurrences(num, digit) {
    return num.toString().split(digit.toString()).length - 1;
}

console.log(countDigitOccurrences(1355567, 5));


function longestBinarySequence(num, digit) {
    let binaryStr = num.toString(2);
    let longestSequence = 0;
    let currentSequence = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === digit.toString()) {
            currentSequence++;
            longestSequence = Math.max(longestSequence, currentSequence);
        } else {
            currentSequence = 0;
        }
    }
    return longestSequence;
}

console.log(longestBinarySequence(101001100111, 1));
console.log(longestBinarySequence(101001100111, 0));



2.
function firstUniqueChar(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar('фывфавыапрс'));


function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

console.log(generateRandomString(5));


function uniqueCharacters(str) {
    let uniqueChars = '';
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            uniqueChars += char;
        }
    }
    return uniqueChars;
}

console.log(uniqueCharacters('позволяеткопироватьтекстиз'));
