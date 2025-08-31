let amigos = [];

function add() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    //Para adicionar um amigo no array. Amigo.push adiciona o amigo.value.
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
        //Recebendo o valor da variável amigo.
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    //Para limpar o text input.
}

function sortear() {
    // Recuperando a lista de pessoas que foram adicionadas para fazer o sorteio.
    // Para a função sortear, é preciso escrever um código que vá embaralhar o array.
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    //Loop:
    for (let i = 0; i < amigos.length; i++) {

        //Dentro desse if abaixo, vamos ver se o i = amigos.length
        // -1 pq começa no 0
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br>';
            // 0 pq é o primeiro elemento.
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br>';
            //Lembra de concatenar com o que já tem, senão toda vez ele coloca um amigo e apaga o próximo.
        }
    }

}

//Algoritmo Fisher-yates.

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reset() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}