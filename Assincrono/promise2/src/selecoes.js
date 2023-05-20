export function selecoes() {
    return new Promise( ( resolve, reject ) => {
        resolve( [
            'França',
            'Marrocos',
            'Argentina',
            'Croácia'
        ] );
    } );
}


export function selecoes2() {

    const promessaFetch = fetch( 'selecoes.json' );

    return promessaFetch
        .then( ( response ) => {
            console.log( response );
            if ( response.status >= 400 ) { // ! response.ok
                throw new Error( 'Não conseguiu obter as seleções. Status: ' + response.status );
            }
            return response.json(); // [ 'França', ... ]
        } );
}

export function selecoes3() {
    const promessaFetch = fetch( 'http://localhost:3000/selecoes' );
    return promessaFetch
        .then( ( response ) => {
            console.log( response );
            if ( response.status >= 400 ) { // ! response.ok
                throw new Error( 'Não conseguiu obter as seleções. Status: ' + response.status );
            }
            return response.json(); // [ 'França', ... ]
        } );
}


export function salvarSelecao( nome ) {
    const opcoes = {
        method: 'POST',
        body: `{ "nome": "${nome}" }`, // string com JSON
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch( 'http://localhost:3000/selecoes', opcoes )
        .then( ( resposta ) => {
            if ( resposta.status >= 400 ) {
                throw new Error( 'Erro ao salvar a seleção: ' + resposta.status );
            }
        } );
}