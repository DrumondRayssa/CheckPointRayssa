// Checkpoint Rayssa Drumond


//Menu (Ítem, tempoPadrao)
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

// Função Microondas
function Micro(tempoPadrao, tempo) {
    if(tempo == tempoPadrao){
        return 'Prato pronto, bom apetite!!!'
    } else if(tempo == (2 * tempoPadrao)){
        return 'A comida queimou'
    } else if(tempo < tempoPadrao) {
        return 'Tempo insuficiente'
    } else if(tempo == (3 * tempoPadrao)) {
        return 'Kabumm'
    } else {
        return 'Prato inexistente'
    } 
}

console.log(Micro(pipoca,10))
console.log('------//-----')
console.log('Prato pronto, bom apetite!!!');