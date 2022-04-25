window.addEventListener("DOMContentLoaded", function(){ //Loads in the 16x16 grid when the page loads
    setGrid();
});

function setGrid(){ //Creates the 16x16 grid by rows
    let gridSize = 16;
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
}

const box = document.querySelectorAll('box');
box.forEach(box => box.addEventListener('onmouseenter', function(){
    box.style.backgroundColor = 'red';
}));