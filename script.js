

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

 const mark={
firstName: prompt("first name"),
lastName:prompt("last name"),
mass:parseFloat(prompt("mass")),
height:parseFloat(prompt("height")),
bmi:function(){ 
    return (this.mass)/(this.height*this.height);
}
 };

 const john={
    firstName: prompt("first name"),
    lastName:prompt("last name"),
    mass: parseFloat(prompt("mass")),
    height:parseFloat(prompt("height")),
    bmi:function(){
        return (this.mass)/(this.height*2);
    }
     };

     const bmi_1=mark.bmi();
     const bmi_2=john.bmi();
     if(bmi_1>bmi_2){
         console.log(`${mark.firstName} ${mark.lastName}'s BMI (${bmi_1}) is higher than ${john.firstName}'s (${bmi_2}) `);
     }
     else{
        console.log(`${john.firstName} ${john.lastName}'s BMI (${bmi_2}) is higher than ${mark.firstName}'s (${bmi_1}) `);
     }


