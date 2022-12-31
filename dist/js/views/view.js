export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`);
        }
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
