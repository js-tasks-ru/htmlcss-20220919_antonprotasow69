const changer = document.getElementById('theme-changer');
const html = document.documentElement;
const changerMobile = document.getElementById('theme-changer-mobile')

changer.addEventListener('change', function () {
    html.toggleAttribute('data-theme-dark');

});

changerMobile.addEventListener('change', function () {
    html.toggleAttribute('data-theme-dark');

});
