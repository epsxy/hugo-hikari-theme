window.onload = function() {

    var $menuIcon = document.getElementsByClassName('menu-icon')[0],
        $offCanva = document.getElementsByClassName('off-canvas')[0],
        $siteWrap = document.getElementsByClassName('site-wrapper')[0],
        $sunIcon = document.getElementsByClassName('sun-btn')[0],
        $moonIcon = document.getElementsByClassName('moon-btn')[0];


    if (localStorage.getItem('darkMode')) {
        removeClass($sunIcon, 'hidden');
        addClass($moonIcon, 'hidden');
        document.body.classList.add('dark-mode');
    }

    $sunIcon.addEventListener('click', function() {
        localStorage.removeItem('darkMode');
        document.body.classList.remove('dark-mode');
        toggleClass($sunIcon, 'hidden');
        toggleClass($moonIcon, 'hidden');
    }, false);

    $moonIcon.addEventListener('click', function() {
        localStorage.setItem('darkMode', 'true');
        document.body.classList.add('dark-mode');
        toggleClass($sunIcon, 'hidden');
        toggleClass($moonIcon, 'hidden');
    }, false);

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        toggleClass($offCanva, 'toggled');
        toggleClass($siteWrap, 'open');
    }, false);

    $menuIcon.addEventListener('mouseenter', function() {
        addClass($menuIcon, 'hover');
    });

    $menuIcon.addEventListener('mouseleave', function() {
        removeClass($menuIcon, 'hover');
    });

    function addClass(element, className) {
        element.className += " " + className;
    }

    function removeClass(element, className) {
        // Capture any surrounding space characters to prevent repeated
        // additions and removals from leaving lots of spaces.
        var classNameRegEx = new RegExp("\\s*" + className + "\\s*");
        element.className = element.className.replace(classNameRegEx, " ");
    }

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        if (element.className.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }

    // Open Twitter/share in a Pop-Up
    var $popup = document.getElementsByClassName('popup')[0];
    if (!$popup) {
        return;
    }
    $popup.addEventListener('click', function(e) {
        e.preventDefault()
        var width  = 575,
            height = 400,
            left   = (document.documentElement.clientWidth  - width)  / 2,
            top    = (document.documentElement.clientHeight - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
    });
}