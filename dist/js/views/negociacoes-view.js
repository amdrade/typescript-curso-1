import { View } from "./view.js";
export class NegociacoesView extends View {
    template(negociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
            </thead>
            <tbody>
            ${negociacoes.lista().map(({ data, quantidade, valor }) => {
            return `
                    <tr>
                        <td>${this.formatarData(data)}</td>
                        <td>${quantidade}</td>
                        <td>${valor}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
