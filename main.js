function tocaSom (seletorElemento) {
    const elemento = document.querySelector(seletorElemento);
//Validando o seletor:
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else {
        console.log('Elemento ou seletor não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let c = 0; c < listaDeTeclas.length; c++){
    
    let tecla = listaDeTeclas[c];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom (idAudio);
    }
//Configurando cliques do teclado:

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
