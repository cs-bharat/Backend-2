// constructor => new operator //
// constructor is js special functions //
function Person(name,age) {
     this.name = name;
     this.age = age;   
     console.log(this); // return window object
}

Person.prototype.talk  = function(){
  console.log(`Hi my name is: ${this.name}`);
}

let p1 = new Person("adam" , 13);
let p2 = new Person("ever" , 19);
// p1.talk === p2.talk => true //

// class in js //
class Persons{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speech(){
        console.log(`Hi am speech and my name is: ${this.name}`);
    }
}

let Pr1 = new Persons("viswa" , 17);
let Pr2 = new Persons("vissu" , 17);