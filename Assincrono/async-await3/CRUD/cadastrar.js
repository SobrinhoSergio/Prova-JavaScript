document.getElementById('salvar').addEventListener('click', async (ev) => {
    ev.preventDefault();
  
    const obj = {
      id: 0,
      descricao: document.getElementById('descricao').value,
      estoque: parseInt(document.getElementById('estoque').value),
    };
  
   /* if (obj.estoque < 1 || obj.estoque > 99 || obj.estoque !== null) {
      alert('Estoque Inválido');
      return;
    }
  
    if (obj.descricao.length < 2) {
      alert('Informe uma descrição com pelo menos 2 caracteres.');
      return;
    }*/
  
    try {
      const response = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao salvar o produto.');
      }
  
      alert('Salvo com sucesso.');
      // location.href = 'produtos.html';
    } 
    catch (erro) {
      alert(erro.message);
    }
  });
  