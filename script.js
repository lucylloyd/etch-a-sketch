let container = document.getElementById("container");
/*let tester = document.createElement("div");
tester.className = "segment";
container.appendChild(tester);*/


//put in info line saying to fill in grid number
let instructions = document.createElement('h3');
instructions.innerHTML = "Enter grid column number (max 100)";
instructions.style.fontFamily = "Helvetica";
container.appendChild(instructions);

//setting up button with input
let input = document.createElement('input');
input.setAttribute("type", "number");
input.id= "input";
container.appendChild(input);
let button = document.createElement('button');
button.innerHTML= "submit";
container.appendChild(button);


//setting up an initial box size


function setup(boxNo){
  
 
//creating a new div for a line of segments
for (let j=0; j<=boxNo-1; j++) {
let newLine = document.createElement("div");
newLine.className = "newLine";

container.appendChild(newLine);

//filling each line with the different segments
for (let i=0; i<= boxNo-1; i++) {
  const newUnit = document.createElement("div");
  newUnit.className = "adding";

  newLine.appendChild(newUnit);
  
};

};
}






let colours = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C", "#97239b", "#dff438" ];
/*
let elements = container.getElementsByClassName('adding');
let testing = document.getElementsByClassName('segment')

testing.addEventListener("mouseover", function () {
testing.style.color = colours[Math.floor(Math.random() * colours.length)];

})*/




button.onclick = function()
{setup(document.getElementById('input').value)
colouring()};


function colouring (){
let newColor = document.querySelectorAll(".adding");
for (const color of newColor ) {
  color.addEventListener("mouseover", () => {
    color.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
  })
}
}