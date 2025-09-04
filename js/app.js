let amigos = [];

function add() {
    let amigo = document.getElementById('nome-amigo');
    let nomeMaiusculo = amigo.value.trim().toUpperCase();


    // Validação - checa se o textbox não tá vazio.
    if (nomeMaiusculo == '') {
        alert('Insira o nome de um amigo!');
        return;
    }

    // Validação - checa por repetição de nome.
    if (amigos.includes(nomeMaiusculo)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeMaiusculo);
    //Para adicionar um amigo no array. Amigo.push adiciona o amigo.value.
    if (lista.textContent == '') {
        lista.textContent = nomeMaiusculo;
        //Recebendo o valor da variável amigo.
    } else {
        lista.textContent = lista.textContent + ', ' + nomeMaiusculo;
    }
    amigo.value = '';
    //Para limpar o text input.
}

function sortear() {
    // Validação - precisa de no mínimo 4 amigos para sortear.
    if (amigos.length < 4) {
        alert('Insira pelo menos 4 amigos.');
        return;
    }
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

//Algoritmo Fisher-yates para randomização.

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reset() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}

