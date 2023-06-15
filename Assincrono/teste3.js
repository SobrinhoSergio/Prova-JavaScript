async function consultarProdutos() {
    
    const response = await fetch( 'http://localhost/produtos' );
    
    if ( response.status >= 400 ) {
        throw new Error( 'Erro ' + response.status );
    }
    
    return response.json(); // Não é precisa await em return (!)
}
    
( async () => {
    try {
        console.log( 'Produtos: ', await consultarProdutos() ); //Ele vai exibir no console os produtos 
    } catch ( err ) {
        console.log( err.message );
    }
} )();