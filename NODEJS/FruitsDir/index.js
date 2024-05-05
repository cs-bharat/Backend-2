//  many file to collaborate in one file and than exports when used - index.js //

//  module exports //
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple,banana,orange];
module.exports = fruits;