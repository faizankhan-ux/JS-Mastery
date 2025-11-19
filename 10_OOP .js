class Person{
    constructor(name , age ){
        this.name = name;
        this.agr = age
    }

    
    //methods

    Eat(){
        console.log("Iam eating ")
    }

    Talk(){
        console.log("Hi , Iam " + this.name)
    }
}

//object creation
let P1 = new Person("faizan" , 18)


// Inheritance

class Male extends Person{
    Say(){
        console.log("I have beard and mustache")
    }
}

class Female extends Person{
    Say(){
        console.log("I have long hairs")
    }
}

// super keyword : calls parent constructor


// static methods : Static methods belong to the class, not the object.
// example :

class Math{
    static add(a , b) {return a+b ; }
}

let M1 = new Math()
Math.add(4,5) // 9 
M1.add() // error   



// -- Getters and Setters
//Getters and setters are special methods inside a class that behave like properties.

class Car{
    constructor(color){
        this._color = color
    }

    get model(){
        return this._color
    }

    set model(C){
        this.color = C;
    }
}

let C1 = new Car("Red");
C1.color = "Green"; // not methods() , it is like properties
console.log(C1.color) // Green

//imp to name variables as _varName to avoid conflict