// Exercise 1

function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

// Exercise 2

function isAdult(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 result: ', isAdult(21)); // "Adult"

// Exercise 3

function isCharacterAVowel(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (character === vowels[0] || character === vowels[1] || character === vowels[2] || character === vowels[3] || character === vowels[4]) {
        return true;
    } else {
        return false;
        }
    }

console.log('Exercise 3 result: ', isCharacterAVowel('a')); // true


// Exercise 4

function generateEmailAddress(name, domain) {
    return name + "@" + domain;
}

console.log('Exercise 4 Result:', generateEmailAddress("johnsmith", "example.com"));


function greetUser(name, timeOfDay) {
    return "Good " + timeOfDay + ", " + name + "!";
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//Exercise 6
function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//Exercise 7
function calculateTip(billAmount, tipPercentage) {
    return billAmount * (tipPercentage / 100);
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


//Exercise 8
function convertTemperature(celsius, fahrenheit) {
    if (celsius){
        fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit    
    } else {
        celsius = (fahrenheit - 32) * 5/9;
        return celsius
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));



//Exercise 9

function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide' && num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Invalid operation or parameters';
    }
}

console.log('Exercise 9 Result:', basicCalculator(5, 10, "subtract"));


//Level Up Exercise
//Exercise 10

function calculateGrade(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


console.log('Exercise 10 Result:', calculateGrade(85));
console.log('Exercise 10 Result:', calculateGrade(100));


//Exercise 11

function createUsername(firstName, lastName) {
    let size = firstName.length + lastName.length;
    for (let i = 0; i < firstName.length; i++) {
        if (i < 3){
            let firstPart = firstName.substring(0, 3);
            let lastPart = lastName.substring(0, 3);
            return firstPart + lastPart + size;
        }
    }
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


//Exercise 12

function numArgs(...args) {
    return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));

