var $sunIcon = document.getElementsByClassName('sun-btn')[0],
    $moonIcon = document.getElementsByClassName('moon-btn')[0];

if (localStorage.getItem('darkMode')) {
    document.body.classList.add('dark-mode');
    removeClass($sunIcon, 'hidden');
    addClass($moonIcon, 'hidden');
}

$sunIcon.addEventListener(
    'click',
    function() {
        localStorage.removeItem('darkMode');
        document.body.classList.remove('dark-mode');
        addClass($sunIcon, 'hidden');
        removeClass($moonIcon, 'hidden');
    },
    false,
);

$moonIcon.addEventListener(
    'click',
    function() {
        localStorage.setItem('darkMode', 'true');
        document.body.classList.add('dark-mode');
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