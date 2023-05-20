import { salvarSelecao, selecoes, selecoes2, selecoes3 } from "./selecoes.js";

const listagem = document.querySelector( 'div' );

selecoes3()
    .then( ( times ) => {
        listagem.innerHTML += `
          <ul>
            ${times.map( t => `<li>${ typeof t === 'string' ? t : t.nome }</li>` ).join( '\n' )}
          </ul>
        `;
    }  )
    .catch( ( err ) => {
        listagem.innerHTML += 'Erro: ' + err.message;
    } );


document.getElementById( 'salvar' ).addEventListener( 'click', ev => {
    ev.preventDefault();
    const nome = document.getElementById( 'pais' ).value;
    salvarSelecao( nome )
        .then( () => alert( 'Salvo com sucesso!' ) )
        .catch( ( err ) => alert( err.message ) );
} );
