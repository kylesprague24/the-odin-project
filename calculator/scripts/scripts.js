window.onload = () => {
    activateButtons(); 
    listenEvents();
}

let number = ""; 

//getting all the div elements on the page 
function activateButtons(){
    //numbers
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three"); 
    const four = document.getElementById("four"); 
    const five = document.getElementById("five"); 
    const six = document.getElementById("six"); 
    const seven = document.getElementById("seven"); 
    const eight = document.getElementById("eight"); 
    const nine = document.getElementById("nine"); 
    const zero = document.getElementById("zero"); 

    //operations
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");

    //actions
    const clear = document.getElementById("clear"); 
    const equals = document.getElementById("equals"); 

    //results
    const results = document.getElementById("results"); 
}

//adding event listeners for all the elements
function listenEvents(){
    //numbers
    one.addEventListener('click', pressed); 
    two.addEventListener('click', pressed);
    three.addEventListener('click', pressed);
    four.addEventListener('click', pressed);
    five.addEventListener('click', pressed);
    six.addEventListener('click', pressed);
    seven.addEventListener('click', pressed);
    eight.addEventListener('click', pressed);
    nine.addEventListener('click', pressed);
    zero.addEventListener('click', pressed);

    //operations
    plus.addEventListener('click', pressed);
    minus.addEventListener('click', pressed);
    multiply.addEventListener('click', pressed);
    divide.addEventListener('click', pressed);

    //actions
    clear.addEventListener('click', pressed);
    equals.addEventListener('click', pressed);
}

function pressed(e){
    if(e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "x" ||e.target.textContent == "÷"){
        operation(e.target.textContent); 
    }
    else if(e.target.textContent == "clear" || e.target.textContent == "="){
        action(e.target.textContent); 
    }
    else{
        number += e.target.textContent; 
        console.log(number); 
    }
}

function operation(op){
    console.log(op); 
}

function action(action){
    console.log(action); 
}