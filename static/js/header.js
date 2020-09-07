var $sunIcon = document.getElementsByClassName('sun-btn')[0],
    $moonIcon = document.getElementsByClassName('moon-btn')[0];

if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    removeClass($sunIcon, 'hidden');
    addClass($moonIcon, 'hidden');
}

$sunIcon.addEventListener(
    'click',
    function() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
        addClass($sunIcon, 'hidden');
        removeClass($moonIcon, 'hidden');
    },
    false,
);

$moonIcon.addEventListener(
    'click',
    function() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        removeClass($sunIcon, 'hidden');
        addClass($moonIcon, 'hidden');
    },
    false,
);

function addClass(element, className) {
    element.className += ' ' + className;
}

function removeClass(element, className) {
    // Capture any surrounding space characters to prevent repeated
    // additions and removals from leaving lots of spaces.
    var classNameRegEx = new RegExp('\\s*' + className + '\\s*');
    element.className = element.className.replace(classNameRegEx, ' ');
}
