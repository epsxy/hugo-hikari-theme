const $sunIcon = document.getElementsByClassName('sun-btn')[0],
    $moonIcon = document.getElementsByClassName('moon-btn')[0];

const applyDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    removeClass($sunIcon, 'hidden');
    addClass($moonIcon, 'hidden');
};

const applyLightTheme = () => {
    localStorage.setItem('theme', 'light');
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    addClass($sunIcon, 'hidden');
    removeClass($moonIcon, 'hidden');
};

if (localStorage.getItem('theme') === 'dark') {
    applyDarkTheme();
} else if (localStorage.getItem('theme') === 'light') {
    applyLightTheme();
} else {
    /* default theme is dark theme */
    applyDarkTheme();
}

$sunIcon.addEventListener('click', applyLightTheme, false);
$moonIcon.addEventListener('click', applyDarkTheme, false);

function addClass(element, className) {
    element.className += ' ' + className;
}

function removeClass(element, className) {
    // Capture any surrounding space characters to prevent repeated
    // additions and removals from leaving lots of spaces.
    const classNameRegEx = new RegExp('\\s*' + className + '\\s*');
    element.className = element.className.replace(classNameRegEx, ' ');
}