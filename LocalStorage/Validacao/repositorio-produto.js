export class RepositorioProduto {

    adicionar( produto ) {
        //Aqui ele passa a função que por sua vez retorna um array 
        const produtos = this.obterTodos();

        //Aqui ele está mandando mandando para a array produtos
        produtos.push( produto );

        //Colocando no localStorage
        localStorage.setItem( 'produtos', JSON.stringify( produtos ) );
    }

    obterTodos() {
        //const produtosString = localStorage.getItem( 'produtos' );
        //if ( ! produtosString ) {
        //   return [];
        //}
        //return JSON.parse( produtosString );
        
        return JSON.parse( localStorage.getItem( 'produtos' ) ) || [];
    }

}