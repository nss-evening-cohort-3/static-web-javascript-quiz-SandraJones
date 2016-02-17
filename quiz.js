

//in var build = [askHeight, askBuildChar];
//var indeNum = function(console.log(" "));


//var totIndenN = [function(n-1, n-2, n-3, n-4, n-5, n-6, n-7), ...];


//calling the functions
// askHeight();
// askBuildChar();


//looping through to build a tree
// for (var i = 1; i <= n; i++) {
//   if (i===1) {	
//   	var placeholder = askheight-1;
//   	(console.log(" "))*placeholder;
//   	(console.log(char))*((2*i)-1);
//   else {	
//   	placeholder = placeholder--;
//   	(console.log(" "))*placeholder;
//     (console.log(char))*((2*i)-1);
//   }
// 	}
// }
var character = document.getElementById("character");
var height = document.getElementById("height");
var button = document.getElementById("btn");

//  indeNum*(n-1);
//}
  //console.log((char)*1);
function tree() {
  console.log(character);
  console.log(height);
  console.log(btn);

} 
function checkInput() {
  if(!char || !height) {
    alert("All fields must be filled out."); 
    console.log("check input is running");
  } else {
    treeObj= {
    character: character.value,
    height: height.value
    }
    console.log("check input is running");
  }
}
  if BuildTree(treeObj) {
      var h = treeObj.height;
      var c = treeObj.character;
      for (var i=1; i<=h; i++) {
        if (i===1) {
          var spaces  = h-1;
          console.log(" ").repeat(spaces);
          console.log(c).repeat((2*i)-1);
        } else {
          console.log(" ").repeat(spaces--);
          console.log(c).repeat((2*i)-1);
      }
    }
  }
button.addEventListener("click", checkInput);












































