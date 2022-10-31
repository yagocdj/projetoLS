import colors from './model/dataset.js';

function switchColor(hrefToCss) {
    let colorLink = document.querySelector('#color-link');
    colorLink.innerHTML = `<link rel="stylesheet" href="${hrefToCss}" id="color-link">`;
}

function getColorPath(colorName) {
    const dataset = colors;
    let href = '';
    for (const color of dataset) {
        if (color.color_name === colorName) {
            href = color.href_to_css;
        }
    }
    return href;
}

document.querySelector('#red').addEventListener('click', () => {
    switchColor(getColorPath('red'));
});

document.querySelector('#orange').addEventListener('click', () => {
    switchColor(getColorPath('orange'));
});

document.querySelector('#green').addEventListener('click', () => {
    switchColor(getColorPath('green'));
});