console.log("running on test.js");

//test adding class to button for styling

//complete, working.

var button = document.getElementById('zero');


button.addEventListener('click', function(){
  button.classList.add('input-press');
  window.setTimeout( function(){button.classList.remove('input-press');}, 50);

});

// try turning anonymous function to external function
// -- ?? does external function need to accept a parameter in order to point to the 'button' or will it operate on 'button' because it is called inside the event listener?








// window.setTimeout(function() {
//     console.log("This was delayed by one second!");
// }, 1000);


// var someVar;
// someVar = some_other_function();
// alert(someVar);
// someObj.addEventListener("click", function(){
//     some_function(someVar);
// }, false);


// doesn't work vvvv

//
//
//
// var testArray = [10, "+", 10, "/", 2, "x", 2]
//
// for (i = 0; i < testArray.length; i++) {
//   // var arrayItem = testArray[i];
//   if (testArray[i] = 10) {
//   testArray[i] = "*";
//   }
// }
//
//
// console.log(testArray);

// does work! vvvv
//
// var testArray = [10, '+', 10, '/', 2, 'x', 2];
//
// for (i = 0; i < testArray.length; i++) {
//   let arrayItem = testArray[i];
//   if (arrayItem === "x") {
//     arrayItem = "*";
//     testArray[i] = arrayItem;
//   }
// }
//
// console.log(testArray);







// if (actualKey[9]) {
//   keyData = "*";
//   valuesArray.push(keyData);
//   fieldDiv.innerHTML += (" x");
// }
// else {
//   valuesArray.push(keyData);
//   if (isInteger(actualKey[i-1])) {
//     fieldDiv.innerHTML += (keyData);
//   }
//   else {
//     fieldDiv.innerHTML += (" " + keyData);
//   };
// };




// var keyParent = document.getElementById('calc-box');
// var fieldDiv = document.getElementById('field')
// var valuesArray = [];
//
//
//
// for (i = 0; i < keyParent.children.length; i++) {
//   let actualKey;
//   if (keyParent.children[i] != keyParent.children[0] && keyParent.children[i] != keyParent.children[1] && keyParent.children[i] != keyParent.children[16]) {
//     actualKey = keyParent.children[i];
//
//     actualKey.addEventListener('click', function(event) {
//       var keyData = actualKey.innerHTML;
//         if (actualKey[9]) {
//           keyData = "*"
//           valuesArray.push(keyData);
//           fieldDiv.innerHTML += (" x");
//           }
//         else {
//           valuesArray.push(keyData);
//           fieldDiv.innerHTML += (" " + keyData);
//       };
//     });
//   };
//
// };
//
// clear.addEventListener('click', function() {
//   fieldDiv.innerHTML = " ";
//   valuesArray = [];
// });
//
// equals.addEventListener('click', function(event){
//   var evaluation = eval(valuesArray.reduce((a, b) => a + b));
//   fieldDiv.innerHTML = evaluation;
// });
//
// // Things remaining:
// // -- why doesn't the x-check work? It should change x to * and push it to the array.
//
// // -- need to clear field if fieldDiv.innerHTML == evaluation, but this seems to break the loop. I think the calculator will work the first time the page is loaded, but from the first time evaluation is called onward fieldDiv.innerHTML will always equal eval. So find workaround.
//
// // -- style button for press
//
// // -- style cursor for pointer
//
// // --
