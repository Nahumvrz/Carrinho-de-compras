function adicionar() {
    let opcoes = document.getElementById('produto').value;
    let nomeProduto = opcoes.split('-')[0];
    let valorUnitario = opcoes.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);
    let preco = quantidade.value * valorUnitario;
    alert(preco);
}



function limpar() {
}