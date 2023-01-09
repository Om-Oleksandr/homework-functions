/* написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
Значення для перевірки функції вводить користувач. */

const firstNumber = prompt();

/**
 * return 'even' if number is even and return 'odd' if number is odd
 * @param {number} number 
 * @returns {string}
 */
const returnAnswer = function (number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
};
/**
 * check if input is a number
 * @param {any} input 
 * @returns {boolean}
 */
const checkNumber = function (input) {
  const inputType =
    input === "" || input === null || Number.isNaN(Number(input));
  return !inputType;
};

if (checkNumber(firstNumber)) {
  console.log(returnAnswer(Number(firstNumber)));
} else {
  console.log("Input value should be number");
}

/* написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null. */

/**
 * compare values
 * @param {any} arg1 
 * @param {any} arg2 
 * @returns {number | null}
 */
const compareValues = function (arg1, arg2) {
  if (typeof arg1 === typeof arg2) {
    if (arg1 === arg2) {
      return null;
    }
    if (arg1 > arg2) {
      return arg1;
    }
    return arg2;
  }
  return null;
};
console.log(compareValues(3, 1));
