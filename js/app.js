let calculoTotal;
limpar();


function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let opcoes = document.getElementById('produto').value;
    let nomeProduto = opcoes.split(' -')[0];
    let precoProduto = opcoes.split('R$')[1];
    alert(nomeProduto);
    alert(precoProduto);
    alert(quantidade);
    
    precos = opcoes == 'Fone de ouvido' ? preco[0] : opcoes == 'Celular' ? preco[1] : preco[2];
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<span class="texto-azul">${quantidade}x</span>${opcoes}<span class="texto-azul">R$${precos}</span>`;
    
}


function valorTotal() {
    calculoTotal = calculoTotal + (quantidade * precos);
    let valorTotal = document.getElementById('valor-total').value;
    valorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">${calculoTotal}</span>`;
}



function limpar() {
    let limpar = document.getElementById('lista-produtos');
    limpar.innerHTML = '';
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">0</span>`;
}