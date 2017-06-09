console.log("Linked!!");
//check

// element selectors

var fieldElement = document.getElementById('field')

var clearKey = document.getElementById('clear')

var sevenKey = document.getElementById('seven')
var eightKey = document.getElementById('eight')
var nineKey = document.getElementById('nine')
var divideKey = document.getElementById('divide')

var fourKey = document.getElementById('four')
var fiveKey = document.getElementById('five')
var sixKey = document.getElementById('six')
var multiplyKey = document.getElementById('multiply')

var oneKey = document.getElementById('one')
var twoKey = document.getElementById('two')
var threeKey = document.getElementById('three')
var subtractKey = document.getElementById('subtract')

var zeroKey = document.getElementById('zero')
var decimalKey = document.getElementById('decimal')
var addKey = document.getElementById('add')

var equalsKey = document.getElementById('equals')

console.log(equalsKey);
console.log(oneKey);
console.log(multiply);

//should I store inputs in an array?

//can I add multiple events in one listener for both the click and the keypress?

//many evenListeners for clicking each div
// each eventListener returns a number or operator and APPENDS it to the field element

// equals and clear are special cases
// equals

//maybe create a variale that stores a collection of inputs through a loop

//maybe on each key press create a new loop that creates a new array containing all the numbers and operators entered

//equals key will turn that array in to a string and return its value?

//clear key will both reset the valuesArray AND clear the field

//functions:
// - function storeAndPrint
// - function clearAndEmpty
// - function createAndAppend
// -
