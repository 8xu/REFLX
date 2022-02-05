const shape = document.querySelector('#shape');
const timer = document.querySelector('#timer');
const body = document.querySelector('body');
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

const changeThemeToDark = () => {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeButton.innerText = darkModeMessage;
}

const changeThemeToLight = () => {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeButton.innerText = lightModeMessage;
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    changeThemeToDark();
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    changeThemeToLight();
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    if (currentTheme == 'dark') {
        changeThemeToDark();
    } else {
        changeThemeToLight();
    }
}

themeButton.addEventListener('click', () => {
    let theme = localStorage.getItem('theme');

    if (theme == 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark();
    }
});