const hexElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {

    let hexColor = '#';

    for(i = 0; i < 6; i++){
        hexColor +=hexElements[randomNumber(hexElements.length)];
        /*This way, each iteraction will add up a value
        to the hexColor let. So after 6 iter., the color
        is complete.*/
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    
});

function randomNumber (maxNum) {
    return Math.floor(Math.random() * ((maxNum)- 0));
};