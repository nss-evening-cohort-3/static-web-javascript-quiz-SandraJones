var character = document.getElementById("character");
var height = document.getElementById("height");
var button = document.getElementById("btn");

function getValues() {
  var x = character.value;
  var y = height.value;
  checkInput(x, y);
}

function tree() {
  console.log(character);
  console.log(height);
  console.log(btn);
} 

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

function buildObj(x, y) {
    var treeObj= {
    character: x,
    height: y
    }
    growTree(treeObj);
  }  
    
function growTree(Obj) {    
    var h = Obj.height;
    var c = Obj.character;
    for (var i=0; i<h; i++) {
        var spaces  = h-1-i;
        var numChar = (2 * i) + 1;
        console.log(" ".repeat(spaces) + c.repeat(numChar));
    }   
  }

button.addEventListener("click", getValues);







//look at what happens if they hit enter when they are in the box
//need another two listeners 
//chk to see if it's a keyup


add two listeners    ("keyup", someFunction)



































