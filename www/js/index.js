/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
function openLogin(userType) {
    if (userType === 'professor') {
        // Redirecionar para o perfil do professor
        document.getElementById('tela-inicial').classList.add('esconder');
        document.getElementById('tela-login-professor').classList.remove('esconder');
    } else if (userType === 'aluno') {
        // Redirecionar para o perfil do aluno
        document.getElementById('tela-inicial').classList.add('esconder');
        document.getElementById('tela-login-aluno').classList.remove('esconder');
    }
}

function simularLogin(userType) {
    if (userType === 'professor') {
        // Redirecionar para o perfil do professor
        document.getElementById('tela-login-professor').classList.add('esconder');
        document.getElementById('perfil-professor').classList.remove('esconder');
    } else if (userType === 'aluno') {
        // Redirecionar para o perfil do aluno
        document.getElementById('tela-login-aluno').classList.add('esconder');
        document.getElementById('perfil-aluno').classList.remove('esconder');
    }
}

// Função para abrir a tela de cadastro
function openCadastro() {
    // Esconder a tela de login do professor
    document.getElementById('tela-login-professor').classList.add('esconder');
    // Esconder a tela de login do aluno, se estiver visível
    document.getElementById('tela-login-aluno').classList.add('esconder');
    document.getElementById('perfil-professor').classList.add('esconder');
    document.getElementById('perfil-aluno').classList.add('esconder');

    // Mostrar a tela de cadastro
    document.getElementById('tela-cadastro').classList.remove('esconder');
}

// Função para simular o cadastro
function simularCadastro() {
    // Aqui você pode adicionar a lógica para realizar o cadastro
    // Por enquanto, apenas retorna para a tela de login para fins de demonstração
    document.getElementById('tela-cadastro').classList.add('esconder');
    document.getElementById('tela-login').classList.remove('esconder');
}

// Função para voltar para a tela inicial
function voltarTelaInicial() {
    // Oculta todas as outras telas e mostra a tela inicial
    document.getElementById('tela-login-aluno').classList.add('esconder');
    document.getElementById('tela-login-professor').classList.add('esconder');
    document.getElementById('perfil-professor').classList.add('esconder');
    document.getElementById('perfil-aluno').classList.add('esconder');
    document.getElementById('tela-cadastro').classList.add('esconder');
    document.getElementById('menu-lateral').classList.add('esconder');
    document.getElementById('tela-inicial').classList.remove('esconder');
}

// Função para voltar para a tela de login
function voltarTelaLogin() {
    // Oculta a tela de cadastro e mostra a tela de login
    document.getElementById('tela-cadastro').classList.add('esconder');
    document.getElementById('tela-login').classList.remove('esconder');
}

/*function exibirTela(idTela) {
    // Oculta todas as telas, exceto a tela selecionada
    var telas = document.querySelectorAll('.container');
    for (var i = 0; i < telas.length; i++) {
        telas[i].style.display = 'none';
    }
    document.getElementById(idTela).style.display = 'block';
}*/

// Função para abrir ou fechar o menu
function toggleMenu() {
    var menu = document.getElementById("menu-lateral");
    if (menu.classList.contains("fechado")) {
        menu.style.left = "0";
        menu.classList.remove("fechado");
    } else {
        menu.style.left = "-250px";
        menu.classList.add("fechado");
    }
}
function toggleMenu2() {
    var menu = document.getElementById("menu-lateral2");
    if (menu.classList.contains("fechado")) {
        menu.style.left = "0";
        menu.classList.remove("fechado");
    } else {
        menu.style.left = "-250px";
        menu.classList.add("fechado");
    }
}

// Função para abrir a tela de alteração de senha
function openAlterarSenha() {
    // Esconder todas as outras telas e mostrar a tela de alteração de senha
    var telas = document.querySelectorAll('.container');
    for (var i = 0; i < telas.length; i++) {
        telas[i].classList.add('esconder');
    }
    document.getElementById('tela-alterar-senha').classList.remove('esconder');
}

// Função para alterar a senha
function alterarSenha() {
    var senhaAtual = document.getElementById('senha-atual').value;
    var novaSenha = document.getElementById('nova-senha').value;
    var confirmarNovaSenha = document.getElementById('confirmar-nova-senha').value;

    // Verificar se a nova senha e a confirmação são iguais
    if (novaSenha !== confirmarNovaSenha) {
        alert("A nova senha e a confirmação da senha não coincidem.");
        return;
    }

    // Aqui você pode adicionar a lógica para validar a senha atual e fazer a alteração de senha
    // Por enquanto, apenas exibimos um alerta
    alert("Senha alterada com sucesso!");
    // Voltar para a tela inicial após alterar a senha
    voltarTelaInicial();
    document.getElementById('tela-alterar-senha').classList.add('esconder');
}

function exibirTela(idTela) {
    // Oculta todas as telas, exceto a tela selecionada
    var telas = document.querySelectorAll('.container');
    for (var i = 0; i < telas.length; i++) {
        telas[i].classList.add('esconder');
    }
    document.getElementById(idTela).classList.remove('esconder');
}

function abrirTelaAlterarDados() {
    exibirTela('tela-alterar-dados-prof');
}

/*window.onload = function () {
    var menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.add('fechado');
};*/

function exibirTela2(tela) {
    // Verificar se a tela é a página inicial
    if (tela === 'perfil-professor') {
        // Fechar o menu lateral
        document.getElementById('menu-lateral').classList.add('fechado');
    }
    // Lógica para exibir a tela desejada
}

// Função para exibir a tela de iniciar transmissão
function exibirTelaIniciarTransmissao() {
    document.getElementById('tela-iniciar-transmissao').style.display = 'block';
}

// Função para voltar para a tela de perfil do professor
function voltarParaPerfil() {
    document.getElementById('tela-iniciar-transmissao').style.display = 'none';
}

// Função para salvar a transmissão
function salvarTransmissao() {
    // Coletar informações inseridas pelo usuário
    var titulo = document.getElementById('titulo').value;
    var disciplina = document.getElementById('disciplina').value;
    var conteudo = document.getElementById('conteudo').value;

    // Aqui você pode implementar a lógica para salvar a transmissão, por exemplo:
    // - Enviar os dados para o servidor
    // - Exibir uma notificação de sucesso
    // - Redirecionar para a tela de perfil do professor
    alert('Transmissão salva com sucesso!');
    voltarParaPerfil();
}
