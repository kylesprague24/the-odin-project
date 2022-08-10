//activates the reset button and tells it what to do when clicked
function activateBtn(){
    reset = document.getElementById("reset");
    reset.onclick = () => reloadGrid(); 
}

//changes the size of the grid for the input
function changeSize(size){
    setCurrentSize(size); 
    reloadGrid(); 
}

//reloads the grid and gets the new size from the user 
function reloadGrid(){
    size = getSize(); 
    grid.innerHTML = ''; 
    setupGrid(size); 
}

//prompts the user for the size of grid they want and returns it
function getSize(){
    let size = prompt("What size would you like?"); 
    return size; 
}

//sets up the grid for the given size and puts event listeners on the divs so they
//know when to change color
function setupGrid(size){
    const grid = document.getElementById('grid'); 
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    for(let i = 0; i < size*size; i++){
        const gridElement = document.createElement('div'); 
        gridElement.classList.add('grid-element'); 
        gridElement.addEventListener('mouseover', changeColor); 
        grid.appendChild(gridElement); 
    }
}

//changing the color of the divs so the sketch is made on mouse hover
function changeColor(e){
    e.target.style.backgroundColor = 'black'; 
}

//when the window loads it gets everything set up
window.onload = () => {
    let size = getSize()
    setupGrid(size); 
    activateBtn(); 
 
}