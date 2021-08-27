class Toast{
    constructor(){
        this.toast = document.createElement("div");
    }
    init(){
        const body = document.querySelector("body");
        body.append(this.toast);
        this.toast.classList.add("toast");
    }

    show(message){
        this.toast.textContent = message;
        this.toast.classList.add("active");
        setTimeout(() => {
            this.toast.classList.remove("active");
        }, 3000);
    }
}