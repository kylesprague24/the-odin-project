window.onload = () =>{
    getElements(); 
}

let id = 1; 

function getElements(){
    const openButton = document.getElementById("add"); 
    openButton.addEventListener('click', openForm); 
    const closeButton = document.getElementById("close"); 
    closeButton.addEventListener('click', closeForm); 
    const submitButton = document.getElementById("submit"); 
    submitButton.addEventListener('click', formSubmit); 
}

function openForm(){
    document.getElementById("container").style.opacity = 0.1; 
    document.getElementById("form-pop").style.display= "flex"; 
}

function closeForm(){
    document.getElementById("container").style.opacity = 1; 
    document.getElementById("form-pop").style.display= "none"; 
}

function formSubmit(){
    let name = document.getElementById("bookName").value; 
    let author = document.getElementById("authorName").value; 
    createRow(name, author);  
}

function createRow(name, author){
    const table = document.getElementById("table");
    let row = table.insertRow(-1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    cell0.innerHTML = name;
    cell1.innerHTML = author;
    cell2.innerHTML = id; 
    id++; 
    document.getElementById("bookName").value = ""; 
    document.getElementById("authorName").value = ""; 
    closeForm(); 
}
