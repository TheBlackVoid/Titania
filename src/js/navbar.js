
const header = document.querySelector('header');
const container = document.querySelector('.container');

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset; {

        if (currentScrollPos > 100) {
            header.classList.add('header-scrolled');
            container.classList.add('container-scrolled');
        } else{
            header.classList.remove('header-scrolled');
            container.classList.remove('container-scrolled');
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