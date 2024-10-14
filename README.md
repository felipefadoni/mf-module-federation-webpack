# ReactJS TypeScript Project with Webpack and Module Federation

## Overview

Este projeto é um exemplo de aplicação React configurada com TypeScript, Webpack, Module Federation e diversas outras bibliotecas úteis. Ele utiliza o Webpack para o bundling dos arquivos e o Tsup para realizar o build, juntamente com algumas ferramentas populares para testes, roteamento, e gerenciamento de estado.

## Features

- **React 18**: Utiliza a última versão do React (18.3.1), que oferece diversas otimizações e melhorias, incluindo o Concurrent Mode.
- **TypeScript**: Desenvolvimento tipado com TypeScript (v5.6.3), ajudando a prevenir erros em tempo de desenvolvimento.
- **Webpack 5**: Bundling com Webpack (v5.95.0), junto com Webpack Dev Server para rodar o ambiente de desenvolvimento.
- **Module Federation**: Arquitetura modular com o Webpack Module Federation, permitindo que módulos sejam expostos e consumidos dinamicamente entre aplicações.
- **React Router v6**: Para gerenciamento de rotas dentro da aplicação.
- **Tsup**: Utilizado para build de pacotes de TypeScript de forma rápida e otimizada.
- **Zustand**: Gerenciamento de estado leve e eficiente com Zustand.
- **Testes**: Configurado com Testing Library e Jest para testes unitários e de integração.


## Requisitos

Antes de iniciar, certifique-se de que você possui o seguinte instalado:

- Node.js (>=16.x.x)
- Yarn (>=1.22.x)

## Como rodar o projeto

### 1. Instalar as dependências

Antes de tudo, instale todas as dependências do projeto usando Yarn:

```bash
yarn install
```
O servidor estará disponível em http://localhost:3000.

```bash
yarn build
```
Os arquivos de saída estarão disponíveis na pasta dist.

```bash
yarn test
```
Isso rodará todos os testes e exibirá os resultados no terminal.
