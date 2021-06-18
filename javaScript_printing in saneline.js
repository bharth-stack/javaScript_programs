/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (data) {
  const str = new Array();
  for (let j = 0; j < size; j++) {
    str[j] = `... ${data[j]}deg5 in ${j + 1} days`;
  }
  //   console.log(str[0] + str[1] + str[2]);
  const str_2 = "";

  for (let k = 0; k < size; k++) {}
  console.log(str.join(""));
};
const size = Number(prompt("enter the size"));
let temp = new Array();
for (let i = 0; i < size; i++) {
  temp[i] = Number(prompt("enter the data"));
}

printForecast(temp);
