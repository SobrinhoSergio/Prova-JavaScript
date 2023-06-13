
function carregarProduto() {
    const obj = {};
    location.search.substring( 1 ).split( '&' )
        .forEach( str => {
            const [ propriedade, valor ] = str.split( '=' );
            obj[ propriedade ] = valor;
        } );
    return obj;
}

function desenharProduto( obj ) {
    document.getElementById( 'id' ).value = obj.id || 0;
    document.getElementById( 'descricao' ).value = obj.descricao || '';
    document.getElementById( 'estoque' ).value = obj.estoque || 0;
}


desenharProduto( carregarProduto() ); // Desenha o produto carregado, se houver

document.getElementById( 'salvar' ).addEventListener( 'click', async function( event ) {
    event.preventDefault();
    try {
        await salvar();
        alert( 'Salvo.' );
    } catch ( erro ) {
        alert( erro.message );
    }
} );

async function salvar() {
    const produto = {
        id: Number( document.getElementById( 'id' ).value ),
        descricao: document.getElementById( 'descricao' ).value,
        estoque: Number( document.getElementById( 'estoque' ).value ),
    };

    let resposta;
    if ( produto.id ) {
        resposta = await fetch( 'http://localhost:3000/produtos/' + produto.id, {
            method: 'PUT',
            body: JSON.stringify( produto ),
            headers: {
                'Content-Type': 'application/json'
            }
        } );
    } else {
        resposta = await fetch( 'http://localhost:3000/produtos', {
            method: 'POST',
            body: JSON.stringify( produto ),
            headers: {
                'Content-Type': 'application/json'
            }
        } );
    }

    if ( resposta.status >= 400 ) {
        throw new Error( `Erro ao cadastrar o produto: ${resposta.status}` );
    }
}