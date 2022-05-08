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
    console.log(document.body);
})
