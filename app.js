const defaultColors = ["navy", "purple","rgba(22,160,133)",
 "#cd5c5c"];

 const btn = document.getElementById("btn");
//btn

const color = document.querySelector(".color");
/*querySelector method returns the FIRST element that 
matches with the method string parameter(CSS type
selector). In this case, the param has a "." because
thats how we call it in CSS.*/

btn.addEventListener('click', () => {
    /*We're going to test the background color's change
    by using our defaultColors array. This has to work
    by selecting a random number between 0 - 3 (the
    # of array elements).*/

    const rdmNumber = randomNumber(defaultColors.length);

    document.body.style.backgroundColor = 
    defaultColors[rdmNumber];
    /*This property allow us to access to bkg color &
    change it.*/

    color.textContent = defaultColors[rdmNumber];
    /*It's said .textContent is better to use than
    .innerHTML in some cases.*/
    console.log(rdmNumber);
});


function randomNumber (maxNum) {
    return Math.floor(Math.random() * ((maxNum)- 0));
};
/*This function generates random number and its param
is the max number of the interval (the min number is 0)*/
