'use strict';
// const england = {
//   capital: 'london',
//   pin: '123',
//   data: [],
//   out(name, from) {
//     console.log(
//       `hi this is ${name} from ${from} right now in ${this.capital} and the id is ${this.pin}`
//     );
//     console.log(this);
//     this.data.push(
//       `hi this is ${name} from ${from} right now in ${this.capital} and the id is ${this.pin}`
//     );
//   },
// };
// const america = {
//   capital: 'NewYork',
//   pin: '456',
//   data: [],
// };
// const switzerland = {
//   capital: 'Bern',
//   pin: '789',
//   data: [],
// };
// const outpu = england.out;
// england.out('bharath', 'india');
// england.out('justin', 'canada');
// outpu.call(america, 'bharath', 'india');
// outpu.call(america, 'justin', 'canada');
// outpu.call(switzerland, 'bharath', 'india');
// outpu.call(switzerland, 'justin', 'canada');
// console.log(america.data);

// england.buyplane = function () {
//   console.log(this);
//   console.log(this.capital);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', england.out.bind(england, 'justin', 'canada'));

// const add = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// const c = add(1)(1);
// console.log(c);

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNumber() {
    const userInpt = parseInt(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${
          this.options[2]
        }\n${this.options[3]}\n ${'(Write option number)'}`
      )
    );
    if (typeof userInpt=='number' && userInpt<=) {
      this.displayResults([userInpt]);
    } else {
      alert('wrong input');
    }
  },
  displayResults(type) {
    if (typeof type == 'object') {
      for (const [i, j] of type.entries()) {
        if (type[i] == 0 || type[i] == 1 || type[i] == 2 || type[i] == 3) {
          this.answers[j]++;
          console.log(poll.answers);
        }
      }
    } else if (typeof type == 'string') {
      for (let i = 0; i < type.length; i++) {
        if (type[i] == 0 || type[i] == 1 || type[i] == 2 || type[i] == 3) {
          this.answers[type[i]]++;
          console.log(poll.answers);
        }
      }
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNumber.bind(poll));
poll.displayResults('153961');
