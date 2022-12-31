export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            const rx = /<scritp>[\s\S]*?<\/script>/;
            template = template.replace(rx, '');
        }
        this.elemento.innerHTML = template;
    }
}
