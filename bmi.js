class BMI {
    constructor(height, weight) //Initialising the data for the class - BMI takes two arguments in this case. 
     {
        this.height = height; //Creates a local instance variable for each argument
        this.weight = weight;
     }

    calculateBMI() //This method will take in both arguments and calculate BMI using the formula below.
    {
        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }


}

let MyBmi = new BMI(2,90); //Creating a new instance of the class BMI.
let calculateBMI = MyBmi.calculateBMI(); //Method then calculates a BMI value using the arguments found in the newly created instance of BMI
console.log(calculateBMI); //Displays result to the console.