//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// guardar os nomes
var amigos = [];

// Função para adicionar o amigo
function adicionarAmigo() {
    var nome = document.getElementById('amigo').value; // Pega o nome digitado

    if (nome === '') { // Verifica se o nome está vazio
        alert('Digite um nome.');
        return; // Para a função se não tiver nome
    }

    amigos.push(nome); // Adiciona o nome no array
    document.getElementById('amigo').value = ''; // Limpa o campo de texto
    mostrarListaAmigos(); // Atualiza a lista na tela
}

// Função para mostrar a lista de amigos
function mostrarListaAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista

    for (var i = 0; i < amigos.length; i++) { // Passa por cada amigo
        lista.innerHTML += '<li>' + amigos[i] + '</li>'; // Adiciona cada nome na lista
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }

    var sorteado = Math.floor(Math.random() * amigos.length); // Sorteia o índice
    document.getElementById('resultado').innerHTML = 'O amigo secreto sorteado é: ' + amigos[sorteado];
}




