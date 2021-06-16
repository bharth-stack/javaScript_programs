// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44 */

// function tip(bill, tip, total) {
//     var discount = 0;

//     let i = 0;
//     while (bill.length != i) {
//         bill[i] <= 300 && bill[i] > 50 ? discount = 15 : discount = 20;
//         tip[i] = (bill[i] / 100) * discount;
//         total[i] = bill[i] + tip[i];
//         i++;
//     }
// }
// let bills = new Array();
// let tips = new Array();
// let totalAmount = new Array();
// let count = prompt("count");
// let i = 0;
// while (i != count) {
//     bills[i] = parseInt(prompt(`bill ${i}`));
//     i++;
// }
// tip(bills, tips, totalAmount);
// i = 0;
// while (i != bills.length) {
//     console.log(bills[i], tips[i], totalAmount[i]);
//     i++;

// }

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


// const avgScore=(one,two,three)=>(one+two+three)/3;
// const winner=function(team_1,team_2)
// {
//     console.log(team_1,team_2);

//     if(team_1>team_2){
//         const avg=team_2+team_2;
//         if(team_1>avg){
//           console.log(`dolphins has double Avg ${team_1} and they own the match  🎉🎊` );
//       }
//       else{
//           console.log(`noe of them own the atch 🎭`);
//       }

//     }
//     else if(team_1<team_2){

//         const avg_2=team_1+team_1;
//         if(team_2>avg_2){
//           console.log(`kolas has double Avg ${team_2} and they own the match 🎉🎊`);
//       }

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52



// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

function tip(bill, tip, total) {
    var discount = 0;

    let i = 0;
    while (bill.length != i) {
        bill[i] <= 300 && bill[i] > 50 ? discount = 15 : discount = 20;
        tip[i] = (bill[i] / 100) * discount;
        total[i] = bill[i] + tip[i];
        i++;
    }
}
function avgTip(bill){
    let count=0;
    for(let i=0;i<bill.length;i++){
count=count+bill[i];

    }return count/bill.length;
}

let bills = new Array();
let tips = new Array();
let totalAmount = new Array();
let count = prompt("count");
let i = 0;
while (i != count) {
    bills[i] = parseInt(prompt(`bill ${i}`));
    i++;
}
tip(bills, tips, totalAmount);
i = 0;
while (i != bills.length) {
    console.log(bills[i], tips[i], totalAmount[i]);
    i++;

}
console.log(avgTip(bills));
console.log(avgTip(tips));