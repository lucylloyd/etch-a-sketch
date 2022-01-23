let container = document.getElementById("container");
/*let tester = document.createElement("div");
tester.className = "segment";
container.appendChild(tester);*/

//deciding size of grid
let boxNo = 50;

//creating a new div for a line of segments
for (let j=0; j<=boxNo-1; j++) {
let newLine = document.createElement("div");
newLine.className = "newLine";
newLine.id = "line[j]";
container.appendChild(newLine);

//filling each line with the different segments
for (let i=0; i<= boxNo-1; i++) {
  const newUnit = document.createElement("div");
  newUnit.className = "adding";
newUnit.id = "unit[i]";
  newLine.appendChild(newUnit);
  
};

};



let colours = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C", "#97239b", "#dff438" ];
/*
let elements = container.getElementsByClassName('adding');
let testing = document.getElementsByClassName('segment')

testing.addEventListener("mouseover", function () {
testing.style.color = colours[Math.floor(Math.random() * colours.length)];

})*/

let newColor = document.querySelectorAll(".adding");
for (const color of newColor ) {
  color.addEventListener("mouseover", () => {
    color.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
  })
}


