export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T) {
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}