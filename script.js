const burgerMenuManagement = (function (){
    const burger = document.querySelector('#burger-container');
    const menu = document.querySelector('#menu');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            const isOpening = !burger.classList.contains('clicked');
            burger.classList.remove('clicked', 'unclicked');
            burger.classList.add(isOpening ? 'clicked' : 'unclicked');
            menu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
})();