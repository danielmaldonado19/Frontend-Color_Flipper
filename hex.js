const hexElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
"B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
//btn

const color = document.querySelector(".color");

btn.addEventListener('click', () => {

    /*const rdmParam0 = randomNumber(hexElements.length);
    let hexChar0 = (hexElements[rdmParam0]).toString();

    const rdmParam1 = randomNumber(hexElements.length);
    let hexChar1 = (hexElements[rdmParam1]).toString();

    const rdmParam2 = randomNumber(hexElements.length);
    let hexChar2 = (hexElements[rdmParam2]).toString();

    const rdmParam3 = randomNumber(hexElements.length);
    let hexChar3 = (hexElements[rdmParam3]).toString();

    const rdmParam4 = randomNumber(hexElements.length);
    let hexChar4 = (hexElements[rdmParam4]).toString();

    const rdmParam5 = randomNumber(hexElements.length);
    let hexChar5 = (hexElements[rdmParam5]).toString();*/
    
    /*let text = document.body.style.backgroundColor = 
    hexChar0 + hexChar1 + hexChar2 + hexChar3 + hexChar4
    + hexChar5;
    
    console.log(text);*/

    hexParam = [];

    for(i = 0; i <= 5; i++){
        rdmParam = randomNumber(hexElements.length)
        hexParam.push(rdmParam);
        console.log(rdmParam)
    }

    color.textContent = hexElements[rdmParam];
    
});

function randomNumber (maxNum) {
    return Math.floor(Math.random() * ((maxNum)- 0));
};