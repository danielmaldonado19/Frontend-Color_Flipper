const hexElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
//btn

const color = document.querySelector(".color");

btn.addEventListener('click', () => {

    const rdmParam = randomNumber(hexElements.length);
    console.log(rdmParam);

    let hexParam0 = hexElements[rdmParam];
    console.log(hexParam0);
    /*document.body.style.backgroundColor = 
    defaultColors[rdmNumber];
    

    color.textContent = defaultColors[rdmNumber];*/
    
});

function randomNumber (maxNum) {
    return Math.floor(Math.random() * ((maxNum)- 0));
};