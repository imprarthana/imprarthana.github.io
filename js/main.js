(function ($) {
    "use strict";
    // Typed Initiate
    if ($('.hero h2').length == 1) {
        var typed = new Typed('.hero h2', {
            strings: ["Web designer", "Content Writer", "Chemist"],
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
})(jQuery);


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

