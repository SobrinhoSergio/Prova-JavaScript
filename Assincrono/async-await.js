async function brindes (){
    if(Math.random() <= 0.5){
        return ['chocolate', 'orange'];
    }
    throw new Error('Sem brindes hoje');
}

(async () => {

    try{
        console.log(await brindes());
    }
    catch(e){
        console.log("Erro", e.message)
    }

})();