const clicked = document.getElementById('generate');

const outputClicked = document.getElementById('number-list');

clicked.addEventListener('click', () => {
    outputClicked.innerHTML = 'Button Clicked!';
});