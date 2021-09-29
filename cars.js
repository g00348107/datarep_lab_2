class Vehicle{
    constructor(make, model, year) //Initialising the data for the class - Vehicle takes three arguments in this case. 
    {
        this.make = make;//Creates a local instance variable for each argument
        this.model = model;
        this.year = year;
    }

    Information() //This method will take in each argument from the Vehicle class and display the values given for each.
    {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Cars extends Vehicle //The class 'Cars' is an extension of the main class 'Vehicle'. This means it inherits from the parent class.
 {
    constructor(make, model, year, doors)//The constructor invokes the parents class constructor and passes it three arguments for make model and year.
    {
        super(make, model, year); //Super calls the constructor of the parent.
        this.doors = doors;

    }
    Information()//This method will invoke the Information method on the parent class and also write the number of doors to the console.
    {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
let myCar = new Cars("VW" , "Golf" , 2001 , 5);
myCar.Information();
