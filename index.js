const toggle = document.querySelector("#toggle");
const flexy = document.querySelector('#flexy');

toggle.addEventListener('change', e => {
    flexy.classList.toggle('show-monthly');
});