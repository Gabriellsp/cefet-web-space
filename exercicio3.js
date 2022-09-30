// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let botoesExpadirRetrair = document.querySelectorAll('.botao-expandir-retrair');

for (let botao of botoesExpadirRetrair) {
    botao.addEventListener('click', function(evento) {
        let botaoClicado = evento.currentTarget;
        paragrafo = botaoClicado.parentNode;
        paragrafo.classList.toggle('expandido');
        if (botaoClicado.innerHTML == '+') {
            botaoClicado.innerHTML = '-';
        } else {
            botaoClicado.innerHTML = '+';
        }
    })
}