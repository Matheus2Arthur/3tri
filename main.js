//a função que deve ser executada é tocaSom, mas que som? Nesse caso,sera o parâmetro idElementoAudio. Ou seja, o endereço da tecla será procurado no html e reproduzido.
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
//se o elemento pesquisado for igual a "inexistente", o alerta de elemento não encontrado aparecerá.
    if (elemento === null) {
        alert('Elemento não encontrado');
    }
//se o elemento existir, a função play daquele elemento acontecerá, ou seja, a tecla será reproduzida.
    if (elemento && elemento.localName === 'audio'){
         elemento.play();
    }else { 
        alert('Elemento não encontrado');
    }
}
//querySelector encontra as informações da tecla pesquisada no documento
const listaDeTeclas = document.querySelectorAll('.tecla');
// Estrutura de repetição - Enquanto
//para que as teclas não sejam repetidas de maneira infinita, criamos o for, com valor de início 0, e valor final chamado de contar < listaDeTeclas.length, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas.
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
//classList armazena todas as informações do elemento pesquisado.
    const instrumento = tecla.classList[1];
// o idAudio é responsável por identificar o som do botão pesquisado.
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
//onkeydown significa "quando a tecla estiver pressionada", nesse caso uma função sera executada, e qual é a função? É a estilização de mudança de cor de botão quando as teclas Enter e Space forem apertadas
    tecla.onkeydown = function(evento) {
        if(evento.code === 'Enter'||evento.code === 'Space'){
        tecla.classList.add ('ativa');}
    }
//onkeyup significa "quando a tecla estiver erguida, não pressionada", nesse caso, a função repetida.
tecla.onkeyup = function () {
    tecla.classList.remove ('ativa');
}
console.log(instrumento);
console.log(contador);
}



