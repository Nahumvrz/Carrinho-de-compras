let valorGeral;
limpar();

function adicionar() {
    let opcoes = document.getElementById('produto').value;
    let nomeProduto = opcoes.split('-')[0];
    let valorUnitario = opcoes.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
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