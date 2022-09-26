// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const inputConstante = document.querySelector('#constante');
const inputMassa1 = document.querySelector('#massa1');
const inputMassa2 = document.querySelector('#massa2');
const inputDistancia = document.querySelector('#distancia');
const inputResultado = document.querySelector('#resultado');
const buttonCalcular = document.querySelector('#calcular');

function calcularForcaGravitacional() {
    const G = inputConstante.value;
    const massa1 = inputMassa1.value;
    const massa2 = inputMassa2.value;
    const distancia = inputDistancia.value;
    const forcaGravitacional = (G * massa1 * massa2) / (Math.pow(distancia,2));
    inputResultado.value = forcaGravitacional;
}

buttonCalcular.addEventListener('click', calcularForcaGravitacional);

