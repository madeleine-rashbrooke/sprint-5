// Code to make a triangle of hash symbols
var hashString = "";
for (var i=0; i<7; i++){
  hashString += "#";
    console.log(hashString);
};

// Code for FizzBuzz exercise
for (var i=1; i<=100; i++){
  if (i%5===0 && i%3===0){
      console.log("FizzBuzz");}
    else if (i%5 === 0){
      console.log("Buzz");}
    else if (i%3 === 0){
      console.log("Fizz");}
    else {
        console.log(i);}
};

// Code for 'chessboard' of hashes and spaces v1
var size = 8;
var gridString = "";
var rowString = "";
for (var j=0; j<size; j++){
  
  if (j%2===0){
    for (i=0; i<size/2; i++){
  rowString += "# ";
    }
  }
  
  else {
    for (i=0; i<size/2; i++){
      rowString += " #";
    }
  }
  gridString += rowString;
  gridString += "\n";
  rowString = "";
}
console.log(gridString);

// Code for chessboard v2 - more elegant, based on Hints
var size = 8;
var gridString = "";
for (var j=1; j<=size; j++){
  for (i=1; i<=size; i++){
  if ((i+j)%2 === 0){
      gridString += "#";
    }
  else {    
      gridString += " ";
    }
  }
  gridString += "\n";  
}  
console.log(gridString);