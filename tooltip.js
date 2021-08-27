class Tooltip{
    constructor(element){
        this.element = element;
        this.tip = element.getAttribute('data-message');
    }

    init(){
        const tooltip = document.createElement("div");
        tooltip.classList.add("tip");
        tooltip.textContent = this.tip;
        this.element.appendChild(tooltip);

        this.element.addEventListener('mouseenter', e => {
            tooltip.classList.add('active');
        });

        this.element.addEventListener('mouseleave', e => {
            tooltip.classList.remove('active');
        })
    }
}