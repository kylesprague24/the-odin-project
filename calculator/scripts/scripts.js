window.onload = () => {
    activateButtons(); 
    listenEvents();
}

let number1 = ""; 
let number2 = ""; 
let operate = false;
let op = ""; 
 
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

//this is called when a button is pressed and it sorts out what to do in each case
function pressed(e){
    if(e.target.textContent =="+" ||e.target.textContent =="-" || e.target.textContent =="x" || e.target.textContent =="÷"){
        if(operate == false){
            op = e.target.textContent; 
            operate = true; 
            number2 = number1; 
            number1 = ""; 
            results.textContent += op; 
        }
    }
    else if(e.target.textContent == "="){
        if(operate == true){
            action(number1, op, number2);  
        }
    }
    else if(e.target.textContent == "clear"){
        operate = false; 
        number1 = ""; 
        number2 = ""; 
        results.textContent = ""; 
    }
    else{
        number1 += e.target.textContent; 
        results.textContent = number1; 
    }
}

function action(num1, op, num2){
    num1 = Number(num1); 
    num2 = Number(num2); 
    operate = false;
    switch(op){
        case '+':
            add(num1, num2); 
            break; 
        case '-':
            subtract(num1, num2); 
            break; 
        case 'x':
            multiplication(num1, num2); 
            break; 
        case '÷':
            division(num1, num2); 
            break; 
    } 

}

function add(n1, n2){
    let result = n1 + n2; 
    number1 = result; 
    number2 = ""; 
    results.textContent = result;

}

function subtract(n2, n1){
    let result = n1 - n2;
    number1 = result; 
    number2 = ""; 
    results.textContent = result; 
}

function multiplication(n1, n2){
    let result = n1 * n2; 
    number1 = result; 
    number2 = ""; 
    results.textContent = result; 
}

function division(n2, n1){
    let result = n1 / n2; 
    number1 = result; 
    number2 = ""; 
    results.textContent = result;
}
