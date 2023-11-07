function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio).play();
    if (elemento === null) {
        alert('Elemento não encontrado');
    }
    if (elemento && elemento.localName === 'audio'){
         elemento.play();
    }else { 
        alert('Elemento não encontrado');
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
// Estrutura de repetição - Enquanto
for(contador< listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

contador = contador + 1;
console.log(contador);
}


