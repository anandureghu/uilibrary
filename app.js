// Tooltip
const tooltip = new Tooltip(document.querySelector('.tip-area'));
tooltip.init();

// Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(item => {
    const dropdown = new Dropdown(item);
    dropdown.init();
});

// Tabbed Contents
const tabs = document.querySelector('.tabs');
const tab = new Tabs(tabs);
tab.init();
