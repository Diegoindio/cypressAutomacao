<<<<<<< HEAD
# Automação de Testes Sauce Demo  

<img src="https://www.saucedemo.com/v1/img/Login_Bot_graphic.png" alt="saucedemo, 8% OFF" style="zoom:10%;" />

=======
# Automação de Testes Sauce Demo  <img src="https://www.saucedemo.com/v1/img/Login_Bot_graphic.png" alt="Framework Cypress, 8% OFF" style="zoom:10%;" />
>>>>>>> 49e17391a9a581d4ef70a7821ce9f6e7ad5400e3

## Objetivo do projeto

Compreender e imergir nas atividades relativas ao dia a dia de um QA, com foco em testes automatizados.

## Apresentando o projeto

**O que será apresentado e acompanhado?**

- Testes Automatizados utlizando Cypress

  ![alt text](imagem/compraProdutos.gif)

**Testes**

- execução: automatizado

- níveis: sistema, aceitação

- tipo: funcional caixa-preta

## Entendendo o Projeto

- Ideia para o projeto: Uma loja virtual - [Sauce Demo](https://www.saucedemo.com/) -  ([Swag Labs]([https://qaxperience.com](https://qaxperience.com/)))
- Implementar os testes automatizados de Login e Fluxo de Compra

## O desafio deverá conter

- Automação Cypress

- Estruturando os diretórios no Visual Code

- Aprendendo a organização dos arquivos no Cypress

- Fluxo E2E

- Gerando vídeos da automatização

## 💻 Tecnologias

- Node.js version **v18.20.3**

- Cypress

  
## Como configurar o projeto

1. Instalar o Node.js [baixe aqui](https://nodejs.org/en/download/source-code)
2. Iniciar o Projeto

```
npm init -y
```
3. Instalar o cypress no projeto
```
npm install cypress --save-dev
```
## Configurar o cypress.config.js
1. Caso obter o retorno **401 - Unauthorized** ao visitar uma página

```
 "chromeWebSecurity": false
```
2. Configuração para o cypress gravar vídeo da execução dos testes
```
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: true,
```
## Como executar os testes

1. Abrir o cypress

```
npx cypress open
```
2. Escolha a **spec** que deseja executar
3. Executar cypress via terminal e aguardar o seu relatório
```
npx cypress run
```



