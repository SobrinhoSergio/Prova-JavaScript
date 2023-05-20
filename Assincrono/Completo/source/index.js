import { Controladora } from "/controller/controladora.js";

const controladora = new Controladora();

async function carregarPagina(arquivo) {
    const resp = await fetch(arquivo);
    return resp.text();
}

window.addEventListener('load', async () => {
    const caminho = location.pathname;
    const regexWelcome = /^\/$|^\/welcome\/?$/i;
    const regexGamesId = /^\/$|^\/games\/[0-9]+\/?$/i;
    const main = document.getElementsByTagName('main')[0];

    if (regexWelcome.test(caminho)) {
        main.innerHTML = await carregarPagina('/welcome.html');
    } else if(regexGamesId.test(caminho)) {
        main.innerHTML = await carregarPagina('/form.html');
        controladora.iniciar();
    } else {
        main.innerHTML = await carregarPagina('/404.html');
    }
});