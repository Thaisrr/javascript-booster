const div = document.querySelector('#container');
// const div = document.getElementById('container');

function changeColor() {
    const colorNumber = Math.floor(Math.random() * 3); // Retourne un nombre entre 0 et 2
    let colors = ['#FF0000', '#00FF00', '#0000FF'];
    div.style.backgroundColor = colors[colorNumber];
}

function changeColor1() {
    const colorNumber = Math.floor(Math.random() * 3); // Retourne un nombre entre 0 et 2
    let color;
    switch (colorNumber) {
        case 0:
            color = 'red';
            break;
        case 1:
            color = 'green';
            break;
        case 2:
            color = 'blue'
            break;
    }
    div.style.backgroundColor = color;
}

function changeColor2() {
    let colorNumber = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
    div.style.backgroundColor = `#${colorNumber}`;
}