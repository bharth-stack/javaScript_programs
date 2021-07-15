'use strict';
const england = {
  capital: 'london',
  pin: '123',
  data: [],
  out(name, from) {
    console.log(
      `hi this is ${name} from ${from} right now in ${this.capital} and the id is ${this.pin}`
    );
    this.data.push(
      `hi this is ${name} from ${from} right now in ${this.capital} and the id is ${this.pin}`
    );
  },
};
const america = {
  capital: 'NewYork',
  pin: '456',
  data: [],
};
const switzerland = {
  capital: 'Bern',
  pin: '789',
  data: [],
};
const outpu = england.out;
england.out('bharath', 'india');
england.out('justin', 'canada');
outpu.call(america, 'bharath', 'india');
outpu.call(america, 'justin', 'canada');
outpu.call(switzerland, 'bharath', 'india');
outpu.call(switzerland, 'justin', 'canada');
console.log(america.data);
