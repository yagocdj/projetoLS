import colors from './model/dataset.js';

function getUserColor(colorId) {
    
    let colorLink = document.querySelector('#color-link');

    if (colorId === 'red') {
        colorLink.innerHTML = `<link rel="stylesheet" href="css/colors/red.css" id="color-link">`;
    } else if (colorId === 'orange') {
        colorLink.innerHTML = `<link rel="stylesheet" href="css/colors/orange.css" id="color-link">`;
    } else if (colorId === 'green') {
        colorLink.innerHTML = `<link rel="stylesheet" href="css/colors/green.css" id="color-link">`;
    }
}

document.querySelector('#red').addEventListener('click', () => {
    getUserColor('red');
});

document.querySelector('#orange').addEventListener('click', () => {
    getUserColor('orange');
});

document.querySelector('#green').addEventListener('click', () => {
    getUserColor('green');
});