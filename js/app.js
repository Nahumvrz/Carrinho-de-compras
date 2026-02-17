let valorGeral;
limpar();

//Acrescentar validações no carrinho
// 1. Se tiver selecionado um produto valido
// 2. Se tiver inserido uma quantidade valida
// 3. Se a entrada não for valida, exibir uma mensagem de erro
// 4. A mensagem deve ser exibida no tala mesmo, não em um alert

function adicionar() {
    let opcoes = document.getElementById('produto').value;
    let nomeProduto = opcoes.split('-')[0];
    let valorUnitario = opcoes.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if ((quantidade < 0 ) || (quantidade > 100)) {
        let mensagemErro = document.querySelector('h1');
        mensagemErro.textContent = 'Produto ou quantidade indisponíveis, selecione um produto disponível e insira uma quantidade entre 1 e 100';
        return;
    }

    document.querySelector('h1').innerHTML = 'Carrinho de <span class="texto-azul">compras</span>';
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>`;
    
    valorGeral = valorGeral + preco;    
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${valorGeral}`;
    quantidade = document.getElementById('quantidade').value = '';

}



function limpar() {
    valorGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    valorTotal = document.getElementById('valor-total').textContent = '0';

}