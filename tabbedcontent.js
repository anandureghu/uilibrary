class Tabs{
    constructor(element){
        this.element = element;
        this.tabs = element.querySelectorAll('.trigger');
        this.contents = element.querySelectorAll('.content');
    }

    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTab(e);
                this.toggleContent(e);
            });
        });
    }

    toggleTab(e){
        // Clear corrent active tab
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // Set active for current Tab
        e.target.classList.add('active');
    }

    toggleContent(e){
        // Clear current active content
        this.contents.forEach(content => {
            content.classList.remove('active');
        });
        // Se tactive for corrent content
        const content = e.target.getAttribute('data-target');
        document.querySelector(content).classList.add('active');
    }
}