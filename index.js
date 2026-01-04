import { intList } from './intlist.js';

const n_input = document.getElementById('n-input');

const min_input = document.getElementById('min-input');

const max_input = document.getElementById('max-input');

const clicked = document.getElementById('generate');

const outputClicked = document.getElementById('number-list');

clicked.addEventListener('click', () => {
    const list_items = intList(parseInt(n_input.value), parseFloat(min_input.value), parseFloat(max_input.value));
    outputClicked.innerHTML = list_items.join('<br>');  
});