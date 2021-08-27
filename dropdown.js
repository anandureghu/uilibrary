class Dropdown{
    constructor(element){
        this.title = element.querySelector('.title');
        this.content = element.querySelector('.content');
    }

    init(){
        this.title.addEventListener('click', e => {
            this.title.classList.toggle('active');
            this.content.classList.toggle('active');
        });
    }
}