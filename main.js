//crianda a funçao tocaSomAplauso e buscando id da tecla para tocar.
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()

}
//referencia constante listsDeTeclas que busca todas as classes tecla

const listaDeTeclas = document.querySelectorAll('.tecla');

//criar a variavel de contagem
let contador = 0;
//laco de repetiçao while
while(contador < listaDeTeclas.length){ 
    //faz funcionar som com teclas.
    const efeito = listaDeTeclas[contador]. classlist[1];
    const idAudio = "#som_"+ efeito;
    listaDeTeclas[contador].onclick =function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);  
}
