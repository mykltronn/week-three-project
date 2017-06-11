// // temp test.js for testing


var keyParent = document.getElementById('calc-box');
var fieldDiv = document.getElementById('field')
var valuesArray = [];

for (i = 0; i < keyParent.children.length; i++) {
  let actualKey;
  if (keyParent.children[i] != keyParent.children[0] && keyParent.children[i] != keyParent.children[1] && keyParent.children[i] != keyParent.children[16]) {
    actualKey = keyParent.children[i];

    actualKey.addEventListener('click', function(event) {
      let keyData = actualKey.innerHTML;
        if (actualKey[9]) {
          keyData = "*"
          valuesArray.push(keyData);
          fieldDiv.innerHTML += (" x");
        }
        else {
          valuesArray.push(keyData);
          fieldDiv.innerHTML += (" " + keyData);
        };
    });
  };

};


// function storeValues(values){
//   var valuesArray = [];
//   valuesArray.push(values)
// };

clear.addEventListener('click', function() {
  fieldDiv.innerHTML = " ";
  valuesArray = [];
});

//blamo, this event listener for EQUALS key contains a function to evaluate an array of different inputs and display it in field!!
//BLAMO

equals.addEventListener('click', function(event){
  fieldDiv.innerHTML = eval(valuesArray.reduce((a, b) => a + b));
});
