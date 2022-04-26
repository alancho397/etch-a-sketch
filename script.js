let gridSize = 16;
window.addEventListener("DOMContentLoaded", setGrid(gridSize)); //Loads the grid once the page is loaded

function setGrid(gridSize){ //Creates the 16x16 grid by rows
    for (let i = 0; i < gridSize; i++){
        let rows = document.createElement('div');
        rows.className = 'row';
        for (let j = 0; j < gridSize; j++){
            let box = document.createElement('div');
            box.className = 'box';
            rows.appendChild(box);
        }
        container.appendChild(rows);
    }
    window.boxes = document.querySelectorAll('div.box');
    window.rows = document.querySelectorAll('div.row');
    listenEvent();
}

function listenEvent(){ //Reinitalize the forEach method for the new 'boxes'
    boxes.forEach(box => box.addEventListener('mouseenter', function(){ //When hovering over the box, the color changes
        changeColor(box);
    }));
}

function changeColor(element){ //Changes the box color
    element.style.backgroundColor = 'red';
}

function clearGrid(){ //Clears the grid
    boxes.forEach(box => {box.remove()});
    rows.forEach(row => {row.remove()});
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){ //Resets grid and asks for new dimensions
    clearGrid(); //Clears the grid
    gridSize = prompt("How boxes do you want in a row? ");
    if (gridSize > 100){
        alert("That's too large!");
    } else if (gridSize <= 0){
        alert("That is impossible!");
    } else{
    setGrid(gridSize);
    }
})