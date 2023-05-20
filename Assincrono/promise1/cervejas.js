fetch( 'http://localhost:3000/cervejas' )
    .then( resposta => {
        if ( resposta.status >= 400 ) {
            throw new Error( 'Erro carregando as cervejas: ' + resposta.status );
        }
        return resposta.json();
    } )
    .then( cervejas => {
        desenharCervejas( cervejas );
    } )
    .catch( erro => {
        exibirErro( erro );
    } );

function desenharCervejas( cervejas ) { // { nome: 'Brahma', preco: 2.00 } -> <tr> <td>
    document.querySelector( 'tbody' ).innerHTML =
        cervejas.map( c => `<tr>
                                <td>${c.nome}</td> 
                                <td>${c.preco}</td> 
                            </tr>` 
                    ).join( '\n' );
}

function exibirErro( erro ) {
    alert( erro.message );
}