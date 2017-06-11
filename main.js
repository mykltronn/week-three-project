console.log("Linked!!");
//check

// element selectors

// var fieldElement = document.getElementById('field')
//
// var clearKey = document.getElementById('clear')
//
// var sevenKey = document.getElementById('seven')
// var eightKey = document.getElementById('eight')
// var nineKey = document.getElementById('nine')
// var divideKey = document.getElementById('divide')
//
// var fourKey = document.getElementById('four')
// var fiveKey = document.getElementById('five')
// var sixKey = document.getElementById('six')
// var multiplyKey = document.getElementById('multiply')
//
// var oneKey = document.getElementById('one')
// var twoKey = document.getElementById('two')
// var threeKey = document.getElementById('three')
// var subtractKey = document.getElementById('subtract')
//
// var zeroKey = document.getElementById('zero')
// var decimalKey = document.getElementById('decimal')
// var addKey = document.getElementById('add')
//
// var equalsKey = document.getElementById('equals')
//
// console.log(equalsKey);
// console.log(oneKey);
// console.log(multiply);

//the .children dot operator selects all the direct children of a parent node and stores them in an array. Use .children of #calc-box to for-loop through keys.  ---edit: if I want to use this logic I need to create conditionals rulling out equals and field and clear.


//what needs to clear the field:
// -- 3 + 5 = 0 CLEAR needs to be run



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
// clearKey does this:
// clearKey.value = "";
// valuesArray = [];


//functions:
// -
// - function storeAndPrint
// function storeAndPrint (){
//
// }
// - function clearAndShow
// - function createAndAppend
// -

//how to avoid writing and event listener for every key <^>

//it would be very nice to be able to use div.textContent to append numbers and operators to an array that can both populate the field and perform an operation. The numbers are fine, but the operators will be store as strings and there's no way that I can find to directly convert the stringified operators to proper operators. Therefore, it looks like I'll have to pull the values ... wait what happens if I .reduce a string that contains operators...


var testArray = [1, "+", 2, "="];
var(testArray.reduce((a, b) => a + b, 0));












// Works for selecting everything but equals, clear, and field!
// it now also

var keyParent = document.getElementById('calc-box');

for (i = 0; i < keyParent.children.length; i++) {
  let actualKey;
  if (keyParent.children[i] != keyParent.children[0] && keyParent.children[i] != keyParent.children[1] && keyParent.children[i] != keyParent.children[16]) {
    actualKey = keyParent.children[i];

    actualKey.addEventListener('click', function(event) {
      var keyData = actualKey.innerHTML;


      // console.log(actualKey.innerHTML);

      //functionOne changes the ID to something for styling
      //functinoTwo takes the button value

    });
  };

};



//loop valuesArray through a .textContent += "valuesArray[i]"



// -- NOTE: .textContent will not work with +=. It cannot append, only replace. Use .innerHTML;
//vvvvvvvvv


// Working function for adding values to the calculator field. <^><^>


var fieldDiv = document.getElementById('field')

function printValues(values) {
  for (i = 0; i < values.length; i++) {
    fieldDiv.innerHTML += values[i];
  };
};
printValues();



//^^^^^^^^ this works for appending stored valuesArray to field. <^><^>
// it can live inside ???

// below function needs to get user input as an array of strings and convert it to integers and operators.
//it lives inside an event listener

function storeValues(values){
  var userValues = [];
  userValues.push(values)
};

clear.addEventListener('click' function() {
  fieldDiv.innerHTML = " ";
  userValues = [];
});

//blamo, this event listener for EQUALS key contains a function to evaluate an array of different inputs and display it in field!!
//BLAMO


equals.addEventListener('click', function(arrayofvalues){
  fieldDiv.innerHTML = eval(arrayofvalues.reduce((a, b) => a + b););
});

//for
// -- loop through array and .reduce all uninterupted integers or .'s to concatenate them into... wait, this might just turn my integers in to strings.
//that's fine, can parseInt() them back in to ints
// -- loop through


// whitespace
