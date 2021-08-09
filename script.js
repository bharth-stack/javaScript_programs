'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// //slice methods

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(array.slice(2));
// console.log(array.slice(4, 8));
// console.log(array.slice(-6));
// console.log(array.slice(-1));
// console.log(array.slice(2, -6));

// //Splice

// // console.log(array.splice(6));
// // console.log(array.splice(7));
// // console.log(array);
// console.log(array.splice(2, 3));

// // REverse

// const array_1 = [5, 4, 3, 2, 1, 0];
// console.log(array_1.reverse());
// console.log(array_1);

// //concact
// const array_alpha = ['z', 'y', 'x', 'w', 'v'];
// console.log(array_alpha.concat(array_1));
// console.log(array_alpha);

// // join
// console.log(array_alpha.join(','));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [key, data] of movements.entries()) {
//   if (data > 0) {
//     console.log(`you deposited ${key} ${data}$`);
//   } else if (data < 0) {
//     console.log(`you withdrawn ${key} ${Math.abs(data)}$`);
//   }
// }
// console.log('👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻');
// movements.forEach(function (data, index, value) {
//   if (data > 0) {
//     console.log(`you deposited ${index} ${data}$`);
//   } else if (data < 0) {
//     console.log(`you withdrawn ${index} ${Math.abs(data)}$`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (data, index) {
  console.log(`${index}: ${data}`);
});
const setData = new Set([
  1, 2, 3, 4, 1, 2, 3, 4, 1, 3, 8, 68867, 757, 46, 3, 5, 2, 7, 5, 58,
]);
setData.forEach(function (data, index) {
  console.log(data, index);
});
