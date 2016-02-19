var character = document.getElementById("character");
var height = document.getElementById("height");
var button = document.getElementById("btn");
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

height.addEventListener("keyup", function(getValues) {
  getValues.preventDefault();
  if (getValues.keyCode == 13) {
      height.click();
   } else {
      //wait for another event, such as a button click or 
      //press enter in the character field
   }
});

character.addEventListener("keyup", function(getValues) {
  getValues.preventDefault();
  if (getValues.keyCode == 13) {
      character.click();
  }  else {
    //wait for another event, such as a button click or 
    //press enter in the character field
  }
});


button.addEventListener("click", getValues);

//need an if stmt? that has 
// if (button event||event height || event character) {
//    then getVallues(); 
//}

//could also alert user to click on the button after inputting values into fields

































