
// prototypes //
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];

arr1.saysHello = () => {
console.log("hello i'am array");
};

arr2.saysHello = () => {
    console.log("hello i'am array");
};

 // arr1.saysHello === arr2.saysHello // -> false = user created
 // "abc".toUpperCase === "xyz".toUpperCase // -> true = protype ka part he