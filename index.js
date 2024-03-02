console.log("hello world!");

var greenButton = document.getElementById("green");

console.log(greenButton);

greenButton.addEventListener('mouseover', banana);
greenButton.addEventListener('mouseout', orange);

function banana() {
    alert("you called?");
    greenButton.innerHTML = "I got clicked!";

    function orange() {
        greenButton.innerHTML = "Green button";
    }
}



