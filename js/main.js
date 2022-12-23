(function ($) {
    "use strict";
    // Typed Initiate
    if ($('.hero .herotext h2').length == 1) {
        var typed_strings = $('.hero .herotext .typed-text').text();
        var typed = new Typed('.hero .herotext h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
})(jQuery);