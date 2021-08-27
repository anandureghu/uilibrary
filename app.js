const tooltip = new Tooltip(document.querySelector('.tip-area'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(item => {
    const dropdown = new Dropdown(item);
    dropdown.init();
}); 
