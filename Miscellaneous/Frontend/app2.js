// factory functions //
function PersonMaker(name,age){
    // one object created
    const person = {
        name:name,
        age: age,
        talk() {
            console.log(`hi my name is : ${this.name}`);
        }
    }
    return person; 
}

let p1 = PersonMaker("bharat" , 20); // created one person 
// many person are created but (problem) is every person to define talk function individual
// and than many more people created -talk function are created and space required on memory//

let p2 = PersonMaker("viswa" ,17); // one copy created
let p3 = PersonMaker("helly" , 18); // one copy created

// p1.talk === p2.talk => false //