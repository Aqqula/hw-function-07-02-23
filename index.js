//Mariia Batanova

//Task 1
//написати функцію,
//яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
//Значення для перевірки функції вводить користувач.

const number = prompt("Enter any number:");

/**
 * 
 * @param {number} number 
 * @returns {string}
 */
const isEvenOrOddNumber = function (number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
};

console.log(isEvenOrOddNumber(number));

//Tast 2
//написати функцію, яка приймає два аргументи і,
//якщо аргументи одного типу, то повертає той, який має більше значення 
//(якщо значення рівні - повертаємо null), 
//інакше(якщо різного типу) теж повертає null.

/**
 * 
 * @param {any} value1 
 * @param {any} value2 
 * @returns {any | null}
 */
const getMaxValue = function(value1, value2){
    if (typeof value1 === typeof value2) {
        if (value1 === value2){
            return null;
        }
        if (value1 > value2){
            return value1;
        }
        return value2;
    }
    return null;
}

console.log(getMaxValue('2','3'));