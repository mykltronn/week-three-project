

var keyParent = document.getElementById('calc-box');
var fieldDiv = document.getElementById('field')
var valuesArray = [];



for (i = 0; i < keyParent.children.length; i++) {
  let actualKey;
  if (keyParent.children[i] != keyParent.children[0] && keyParent.children[i] != keyParent.children[1] && keyParent.children[i] != keyParent.children[16]) {
    actualKey = keyParent.children[i];

    actualKey.addEventListener('click', function(event) {
      let keyData = actualKey.innerHTML;
        if (keyData === "x") {
          keyData = "*";
          valuesArray.push(keyData);
          fieldDiv.innerHTML += (" x");
          console.log(keyData);
          }
        else {
          valuesArray.push(keyData);
          fieldDiv.innerHTML += (" " + keyData);
      };
    });
  };
};

clear.addEventListener('click', function() {
  fieldDiv.innerHTML = " ";
  valuesArray = [];
});

equals.addEventListener('click', function(event){
  var evaluation = eval(valuesArray.reduce((a, b) => a + b));
  fieldDiv.innerHTML = evaluation;
});


// Things remaining:

// -- remove spaces between contiguous integers


//Bonus features

// --clear field after an equation has been evaluated and new key has been pressed.  need to clear field if fieldDiv.innerHTML == evaluation? but this seems to break the loop. I think the calculator will work the first time the page is loaded, but from the first time evaluation is called onward fieldDiv.innerHTML will always equal eval. So find workaround.

// -- style button for press.


// -- add user-input error control. user can't take multiple operands in a row.

// -- add modulus key

// -- and exponentiation key

// -- parentheses key
