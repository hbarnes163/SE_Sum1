// Import the intList function defined in intlist.js
import { intList } from './intlist.js';

// Specify DOM elements
const n_input = document.getElementById('n-input');

const min_input = document.getElementById('min-input');

const max_input = document.getElementById('max-input');

const clicked = document.getElementById('generate');

const outputClicked = document.getElementById('number-list');

// Add event listener to the button
clicked.addEventListener('click', () => {
    // Generate the list of integers based on user input
    const list_items = intList(parseInt(n_input.value), parseFloat(min_input.value), parseFloat(max_input.value));
    // Display the generated list on separate lines in the output element
    outputClicked.innerHTML = list_items.join('<br>');  
});