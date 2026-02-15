let preco =[100 , 1400 , 5000];
let precos;
let calculoTotal;
limpar();


function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let opcoes = document.getElementById('produto').value;
    if (opcoes === 'Fone de ouvido - R$100') {
        opcoes = opcoes.replace('Fone de ouvido - R$100', 'Fone de ouvido');
    } else if (opcoes === 'Celular - R$1400') {
        opcoes = opcoes.replace('Celular - R$1400', 'Celular');
    } else{
        opcoes = opcoes.replace('Oculus VR - R$5000', 'Oculus VR');
    }
    
    precos = opcoes == 'Fone de ouvido' ? preco[0] : opcoes == 'Celular' ? preco[1] : preco[2];
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<span class="texto-azul">${quantidade}x</span>${opcoes}<span class="texto-azul">$${precos}</span>`;
    
}


function valorTotal() {
    calculoTotal = calculoTotal + (quantidade * precos);
    let valorTotal = document.getElementById('valor-total').value;
    valorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">${calculoTotal}</span>`;
}

valorTotal();



function limpar() {
    let limpar = document.getElementById('lista-produtos');
    limpar.innerHTML = '';
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">0</span>`;
}