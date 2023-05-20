
export async function selecoes() {
    return [
        'França',
        'Marrocos',
        'Argentina',
        'Croácia'
    ];
}

export async function selecoes2() {
    const response = await fetch( 'selecoes.json' );
    if ( response.status >= 400 ) {
        throw new Error( 'Erro ao consultar as seleções: ' + response.status );
    }
    return response.json(); // Promise< string[] >
}


export async function selecoes3() {
    const response = await fetch( 'http://localhost:3000/selecoes' );
    if ( response.status >= 400 ) {
        throw new Error( 'Erro ao consultar as seleções: ' + response.status );
    }
    return response.json(); // Promise< string[] >
}