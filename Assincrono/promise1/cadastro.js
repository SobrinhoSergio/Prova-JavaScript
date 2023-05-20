document.getElementById( 'salvar' ).addEventListener( 'click', event => {
    event.preventDefault();

    const cerveja = {
        nome: document.getElementById( 'nome' ).value,
        preco: Number( document.getElementById( 'preco' ).value ),
    };

    fetch( 'http://localhost:3000/cervejas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( cerveja )
    } )
    .then( resposta => {
        if ( resposta.status >= 400 ) {
            throw new Error( 'Erro salvando a cerveja: ' + resposta.status );
        }
        alert( 'Salva com sucesso!' );
    } )
    .catch( erro => {
        alert( erro.message );
    } );

} );