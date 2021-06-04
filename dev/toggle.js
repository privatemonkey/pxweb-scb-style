function toggleTools() {
    let obj = document.querySelector('mobilemenu');
    if (obj.classList) {

    }
    
}

function ToggleBurgerMenu() {
    var x = document.getElementsByClassName("mobilemenu");
    var isExpanded = false;
    if (x[0].classList.contains("mobilemenuhidden")) {
        isExpanded = true;
    }
    for (var i = 0, len = x.length | 0; i < len; i = i + 1 | 0) {
         x[i].classList.toggle("mobilemenuhidden");
    }
    setBurgerMenuStatus(isExpanded);
    y = document.getElementById("btnBurgerMenu");
    y.classList.toggle("burger_menu-icon");
    y.classList.toggle("burger_menu_open-icon");
}

    function setBurgerMenuStatus(isExpanded) {
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem("burgermenuIsExpanded",isExpanded);
        }
            }
    function    InitBurgerMenu() {
        var x = document.getElementsByClassName("mobilemenu");
        var y = document.getElementById("btnBurgerMenu");
        if (typeof sessionStorage !== 'undefined') {
            if (sessionStorage.getItem("burgermenuIsExpanded") == "true") {
                for (var i = 0, len = x.length | 0; i < len; i = i + 1 | 0) {
                    x[i].classList.remove("mobilemenuhidden");
                }
                y.classList.add("burger_menu_open-icon");
                y.classList.remove("burger_menu-icon");
            }

        }

    }