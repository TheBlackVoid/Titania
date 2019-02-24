
const header = document.querySelector('header');

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset; {

        if (currentScrollPos > 100) {
            header.classList.add('header-scrolled');
        } else{
            header.classList.remove('header-scrolled');
        }
    }
}


var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile');
});

exit.addEventListener('click', function (e) {
    nav.classList.add('hide-mobile');
});