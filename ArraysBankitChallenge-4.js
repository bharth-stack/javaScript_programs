// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice','Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];


// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach((data)=>{
  data.recommendedFood = Math.trunc(data.weight**0.75*28);  
})
console.log(dogs);
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

dogs.forEach((data)=>{
 if(data.owners.includes('Sarah')){
   
   if((data.curFood<(data.recommendedFood*0.9))){
console.log("Eating Little");
   }
   else if(data.curFood>(data.recommendedFood*1.10)){
     console.log("Eating Big");
   }
   else{
     console.log("Eating Exactly")
   }
   
 }
 data.owners.includes('Sarah')?(data.curFood < (data.recommendedFood*0.9)) ?console.log("Eating Little") : (data.curFood>(data.recommendedFood*1.10)) ?console.log("Eating Big"):console.log("Eating Exactly"):console.log();
})

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
let ownersEatTooMuch=[],ownersEatTooLittle=[],ownersEatExactly=[];
dogs.forEach((data)=>{
   data.curFood<(data.recommendedFood*0.9)?ownersEatTooLittle.push(data.owners):data.curFood>(data.recommendedFood*1.10)?ownersEatTooMuch.push(data.owners):'';
})


// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!" 

console.log(`"${ownersEatTooMuch.flat().join(" and ")} dogs eat too much!"`);
console.log(`"${ownersEatTooLittle.flat().join(" and ")} dogs eat too Little!"`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some((data)=>{
  return data.curFood===data.recommendedFood;
}))

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
console.log(dogs.some((data)=>{
  return data.curFood<(data.recommendedFood*1.10)&&(data.curFood>(data.recommendedFood*0.9));
}))
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
dogs.forEach((data)=>{
  data.curFood<(data.recommendedFood*1.10)&&(data.curFood>(data.recommendedFood*0.9))?ownersEatExactly.push(data):""
})
console.log(ownersEatExactly);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const ho=dogs.slice().sort((data1,data2)=>{
return data1.recommendedFood-data2.recommendedFood
});
console.log(ho);