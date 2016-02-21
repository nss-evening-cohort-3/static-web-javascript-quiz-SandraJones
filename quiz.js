var character = document.getElementById("character");
var height = document.getElementById("height");
var button = document.getElementById("btn");

function eraser() {
  height.value = "";
  character.value = "";
}
//capturing the input
function getValues() {
  var x = character.value;//character element
  var y = height.value;
  checkInput(x, y);
}
//function to console log user input
function tree() {
  console.log(character);
  console.log(height);
  console.log(btn);
} 
//this is where we console log the spaces and characters
function growTree(Obj) {    
    var h = Obj.height;
    var c = Obj.character;
    for (var i=0; i<h; i++) {
        var spaces  = h-1-i;
        var numChar = (2 * i) + 1;
        console.log(" ".repeat(spaces) + c.repeat(numChar));
    }
    eraser();   
  }
//building an object with two key value pairs
function buildObj(x, y) {
    var treeObj= {
    character: x,
    height: y
    }
    growTree(treeObj);
  }  
//checking the input by user     
function checkInput(x, y) {
  tree();
  if(!x || !y) {
    alert("All fields must be filled out."); 
    console.log("check input is running");
  } else {
    buildObj(x, y);
    console.log("check input is running");
  }
}
//event listeners that capture a button press,
//and the up movement of the enter key when in
//the height or character field 

          // height.addEventListener("keyup", getValues); 
          //   getValues.preventDefault();
          //   if (getValues.keyCode === 13) {
          //       height.getValues(y);
          //    } else {
          //       //wait for another event, such as a button click or 
          //       //press enter in the character field
          //    }
          // };
//to reset the input field:
//var form = document.getElementById("myForm");
//form.reset();


          // character.addEventListener("keyup", getValues);
          //   getValues.preventDefault();
          //   if (getValues.keyCode === 13) {
          //       character.getValues(x);
          //   }  else {
          //     //wait for another event, such as a button click or 
          //     //press enter in the character field
          //   }
          // };


button.addEventListener("click", getValues);

//need an if stmt? that has 
// if (button event||event height || event character) {
//    then getVallues(); 
//}

character.addEventListener("keyup", checkKeyPressed);
function checkKeyPressed(x) {
  (x.keyCode === 13); 
  alert("Please click the button.");
  }

height.addEventListener("keyup", checkKeyPressed);
function checkKeyPressed(y) {
  (y.keyCode === 13); 
  alert("Please click the button.");
}



