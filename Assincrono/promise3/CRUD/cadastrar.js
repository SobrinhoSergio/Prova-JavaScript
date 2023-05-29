document.getElementById( 'salvar' ).addEventListener( 'click',
            ( ev ) => {
            ev.preventDefault();

            const obj = {
                id: 0,
                descricao: document.getElementById( 'descricao' ).value,
                estoque: parseInt( document.getElementById( 'estoque' ).value ),
            };

            if ( obj.descricao.length < 2 ) {
                alert( 'Informe uma descrição com pelo menos 2 caracteres.' );
                return;
            }

            fetch( 'http://localhost:3000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            } )
                .then( response => {
                    if ( ! response.ok ) {
                        throw new Error( 'Erro ao salvar o produto.' );
                    }
                    alert( 'Salvo com sucesso.' );
                    // location.href = 'produtos.html';
                } )
                .catch( erro => alert( erro.message ) );
        } );