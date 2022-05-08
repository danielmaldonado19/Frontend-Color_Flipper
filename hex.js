const hexElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
//btn

const color = document.querySelector(".color");

btn.addEventListener('click', () => {

    /*const rdmParam0 = randomNumber(hexElements.length);
    let hexChar0 = (hexElements[rdmParam0]).toString();*/

    hexColor = [];
    /*This array will contain all the hex color char.*/

    for(i = 0; i < 6; i++){
        rdmParam = randomNumber(hexElements.length);
        hexColor.push((hexElements[rdmParam]).toString());
    }
    /*This cycle generates a char for each of the 6 char
    of an hex color and will store them in the array.*/

    let fullColor = hexColor[0] + hexColor[1] + hexColor[2]
    + hexColor[3] + hexColor[4] + hexColor[5];
    console.log(hexColor[0] + hexColor[1] + hexColor[2]
    + hexColor[3] + hexColor[4] + hexColor[5]);
    /*fullColor is the string of the hex color.*/

    document.body.style.backgroundColor = '#' + fullColor;

    color.textContent = '#' + fullColor;
    
});

function randomNumber (maxNum) {
    return Math.floor(Math.random() * ((maxNum)- 0));
};