export function domInjector(seletor) {
    return function (target, propertKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, {
            get: getter
        });
    };
}
