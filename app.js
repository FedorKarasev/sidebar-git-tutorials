const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar .toggle');
const navItems = document.querySelectorAll('.nav-item');

toggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('open');
});

navItems.forEach(navItem => {
    navItem.addEventListener('click', e => {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        navItem.classList.add('active');
    });
});