const clicked = document.getElementById('clickMeBtn');

const outputClicked = document.getElementById('output-field');

clicked.addEventListener('click', () => {
    outputClicked.innerHTML = 'Button Clicked!';
});