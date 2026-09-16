const burgerMenuManagement = (function () {
    const burger = document.querySelector('#burger-container');
    const menu = document.querySelector('#menu');
    const title = document.querySelector('#title');
    const links = document.querySelectorAll('#menu a');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            const isOpening = !burger.classList.contains('clicked');
            burger.classList.remove('clicked', 'unclicked');
            burger.classList.add(isOpening ? 'clicked' : 'unclicked');
            menu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    if (links) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                shutDownMenu();
            });
        });
    }

    if (title) {
        title.addEventListener('click', () => {
            const menuOpen = document.body.classList.contains('menu-open');
            if (menuOpen) {
                shutDownMenu();
            }
        });
    }

    const shutDownMenu = () => {
        if (burger && menu) {
            burger.classList.replace('clicked', 'unclicked');
            menu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
})();