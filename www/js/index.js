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

function exibirTela(idTela) {
    // Oculta todas as telas, exceto a tela selecionada
    var telas = document.querySelectorAll('.container');
    for (var i = 0; i < telas.length; i++) {
        telas[i].style.display = 'none';
    }
    document.getElementById(idTela).style.display = 'block';
}

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

