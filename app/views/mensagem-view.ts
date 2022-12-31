import { View } from "./view.js";

export class MensagemView extends View<string> {

    template(model: string) {
        return `
        <p class="alert alert-info" role="alert">${model}<p>
        `;
    }

}