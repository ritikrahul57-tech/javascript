let a;
a=confirm("Welcome to the calculator page")
console.log(a)



const screen = document.getElementById("display")
function display(input)
{
screen.value+=input;  
}

function  cleardisplay(){
    screen.value="";
}

function calculateresult(){
screen.value=eval(screen.value);
}