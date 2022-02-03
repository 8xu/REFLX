const shape = document.querySelector('#shape');
const timer = document.querySelector('#timer');
const themeButton = document.querySelector('#themeButton');
var startTime = new Date().getTime();

function getColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function getBorderRadius() {
    return Math.floor(Math.random() * 100);
}

function createShape() {
    shape.style.borderRadius = getBorderRadius() + 'px';
    shape.style.display = "block";
    shape.style.backgroundColor = "#" + getColor();
    startTime = new Date().getTime();
}

function delayAppear() {
    setTimeout(createShape, Math.random() * 2000);
}
delayAppear();

shape.addEventListener('click', () => {
    var endTime = new Date().getTime();
    shape.style.display = "none";
    var callTime = (endTime - startTime) / 1000;
    timer.innerHTML = callTime + "s";
    delayAppear();
});

var lightModeMessage = '🌞';
var darkModeMessage = '🌙';
themeButton.innerText = lightModeMessage;

themeButton.addEventListener('click', () => {
    const body = document.querySelector('body');

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        themeButton.innerText = lightModeMessage;
    } else {
        body.classList.add('dark');
        themeButton.innerText = darkModeMessage;
    }
});