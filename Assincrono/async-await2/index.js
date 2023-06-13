async function consultarProdutos() {
    const resposta = await fetch( 'http://localhost:3000/produtos' );
    if ( ! resposta.ok ) {
        throw new Error( 'Erro ao consultar os produtos.' );
    }
    const produtos = await resposta.json();
    return produtos;
}

async function remover( id ) {
    try {
        const resposta = await fetch( 'http://localhost:3000/produtos/' + id,
            { method: 'DELETE' } );
        if ( ! resposta.ok ) {
            throw new Error( 'Erro ao remover o produto.' );
        }
        document.querySelector( `tr[data-id="${id}"]` ).remove();
    } catch ( erro ) {
        alert( erro.message );
    }
}

function desenharProdutos( produtos ) {
    document.querySelector( 'tbody' ).innerHTML =
        produtos.map( p =>
            `<tr data-id="${p.id}" >
                <td>${p.id}</td>
                <td>${p.descricao}</td>
                <td>${p.estoque}</td>
                <td> <a
                    href="cadastro.html?id=${p.id}&descricao=${p.descricao}&estoque=${p.estoque}"
                    >Alterar</a>
                </td>
                <td>
                    <button onclick="remover( ${p.id} )" >Remover</button>
                </td>
            </tr>`
        ).join( '\n' );
}


( async function() {
    try {
        const produtos = await consultarProdutos();
        desenharProdutos( produtos );
    } catch ( erro ) {
        console.log( erro.message );
    }
} )(); // <-- invocando