import { selecoes, selecoes2, selecoes3 } from "./selecoes.js";

const listagem = document.querySelector( 'div' );

( async function() {

    try {
        const times = await selecoes3();
        listagem.innerHTML += 
            `<ul>
                ${times.map( 
                    t => 
                        `<li>
                            ${ typeof t === 'string' ? t : t.nome }
                        </li>` 
                ).join( '\n' )}
            </ul>`;
    } catch( err ) {
        listagem.innerHTML += 'Erro: ' + err.message;
    }

} )();