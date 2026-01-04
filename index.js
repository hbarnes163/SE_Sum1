import { intList } from './intlist.js';

const n_input = document.getElementById('n-input').value;

const min_input = document.getElementById('min-input').value;

const max_input = document.getElementById('max-input').value;

const clicked = document.getElementById('generate');

const outputClicked = document.getElementById('number-list');

clicked.addEventListener('click', () => {
    const list_items = intList(parseInt(n_input), parseInt(min_input), parseInt(max_input));
    outputClicked.innerHTML = list_items.join('<br>');
});