export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T) {
        let template = this.template(model);
        if (this.escapar) {
            const rx = /<scritp>[\s\S]*?<\/script>/;
            template = template.replace(rx, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}