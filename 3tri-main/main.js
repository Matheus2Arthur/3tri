function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
// Estrutura de repetição - Enquanto
while(contador< listaDeTeclas.length) {
    listaDeTeclas[contador].classList[1];
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio ='#som_ ${instrumento}';
    console.log(instrumento);
    tecla.onclick = function(){
tocaSom('#som_tecla_splash');
    };
    contador = contador + 1;
    
    
   
   
   
}



