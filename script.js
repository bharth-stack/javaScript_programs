/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44 */

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

