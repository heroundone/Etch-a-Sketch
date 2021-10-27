// add button to the top of the page for clearing the grid
let resetBtn = document.createElement('button');
resetBtn.innerText = 'Clear Grid';
resetBtn.addEventListener('click', function () {
    let divsToDelete = document.querySelectorAll('#container div'); // obtain node list of divs within grid
    removeGrid(divsToDelete);
    
    let gridSideLength = prompt('How many squares per side in the new grid?'); // get size of grid sides
    gridSideLength = Math.round(gridSideLength);
    while (gridSideLength < 1 || gridSideLength > 100) { // check user's input
        gridSideLength = prompt('How many squares per side in the new grid?');
        gridSideLength = math.round(gridSideLength);
    }; 
    gridSize = Math.pow(gridSideLength, 2); // calculate total number of divs in the grid
    console.log(gridSize);
    createGrid(container, gridSize, gridSideLength, containerHeight, containerWidth); // create new grid
});
document.body.appendChild(resetBtn); // finally add button to top of page

// create the container, which will contain the divs to form the grid
const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

//dimensions of container
containerHeight = 650;
containerWidth = 900;

// initially how many squares per side (initial value will be 16)
let gridSize = 256;
let gridSideLength = 16;


function createGrid (container, gridSize, gridSideLength, containerHeight, containerWidth) {
    // calculate height and width of each div in the grid
    let divHeight = (containerHeight / gridSideLength);
    divHeight = divHeight.toFixed(2);
    let divWidth = (containerWidth / gridSideLength);
    divWidth = divWidth.toFixed(2); 

    /* create the basic div that will be repeated a specified number of times to fill the container
       and set the initial heigth and width for each div */
    let div = document.createElement('div');
    div.style.height = divHeight + 'px';
    div.style.width = divWidth + 'px';

    // create document fragment that we will append each unit of the grid to
    let fragment = document.createDocumentFragment();

    // iterate through grid and append each div to a document fragment, then append fragment to container
    for (let i = 1; i <= gridSize; i++) {
        let clone = div.cloneNode();
        clone.addEventListener('mouseenter', (e) => e.target.classList.add('hover')); // mouse turns div black
        fragment.appendChild(clone);
    }; 
    container.appendChild(fragment);
};

// function that removes all of the divs within the grid
function removeGrid(divsToDelete) {
    // obtain a node list for the all the divs in the grid and for each remove the div
    divsToDelete.forEach(function (div) {
        div.remove()
    });
};

// call function to create initial grid
createGrid(container, gridSize, gridSideLength, containerHeight, containerWidth);