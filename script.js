// add button to the top of the page for clearing the grid 
let resetBtn = document.createElement('button');
resetBtn.innerText = 'Clear Grid';
resetBtn.addEventListener('click', function () {
    divsToToggle = document.querySelectorAll('.hover');
    divsToToggle.forEach((div) => div.classList.toggle('hover'));
});
document.body.appendChild(resetBtn);

// create the container, which will contain the divs to form the grid
const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

// create document fragment that we will append each unit of the grid to
let fragment = document.createDocumentFragment();

//dimensions of container
containerHeight = 650;
containerWidth = 900;

// initially how many squares per side (initial value will be 16)
let gridSize = 256;
let divHeight = (containerHeight / 16);
divHeight = divHeight.toFixed(2);
let divWidth = (containerWidth / 16);
divWidth = divWidth.toFixed(2); 

/* create the basic div that will be repeated a specified number of times to fill the container
   and set the initial heigth and width for each div */
const div = document.createElement('div');
div.style.height = divHeight + 'px';
div.style.width = divWidth + 'px';

// iterate through grid and append each div to a document fragment, then append fragment to container
for (let i = 0; i <= gridSize; i++) {
    let clone = div.cloneNode();
    clone.addEventListener('mouseenter', (e) => e.target.classList.add('hover')); // mouse turns div black
    fragment.appendChild(clone);
}; 
container.appendChild(fragment);