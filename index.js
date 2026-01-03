import { intList } from './intlist.js';

const n_input = document.getElementById('n-input');

const min_input = document.getElementById('min-input');

const max_input = document.getElementById('max-input');

const clicked = document.getElementById('generate');

const outputClicked = document.getElementById('number-list');

clicked.addEventListener('click', () => {
    outputClicked.innerHTML = intList(parseInt(n_input.value), parseInt(min_input.value), parseInt(max_input.value));
});