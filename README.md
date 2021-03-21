<p align="center">
	
  <img alt="Index Page" src="./public/indexPage.png">


  


  
 
</p>


<h4 align="center"> 
	🚧 Application under construction! 🚧
</h4>

##  👨‍💻Technologies used  ##

<p align="center">
<img alt="Index Page" src="./public/public/CSS3_and_HTML5_logos_and_wordmarks.svg.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<img alt="Index Page" src="./public/public/Typescript_logo_2020.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<img alt="Index Page" src="./public/public/logo-sm.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	
<img alt="Index Page" src="./public/public/MongoDB_Logo.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

</p>

## 💻 Project information

Uma aplicação que simula a utilização da técnica de pomodoro com o intuito de tornar devs mais produtivos e mais saudáveis.


---

<a name="-funcionalidades"></a>

## ⚙️ Functionalities


 ☑ Pagina Principal;<br>
  ✔️ Cronômetro;<br>
  ✔️ Barra de Experiência;<br>
  ✔️ Desafios;<br>
  ✔️ Botão de Falhei - Cancela Desafio e Reseta Cronômetro;<br>
  ✔️ Botão de Completei - Adiciona Experiência do Desafio e Reseta Cronômetro;<br>
  ✔️ Apresenta um Modal quando usuário sobe de nível;<br>
  ✔️ Os dados do usuário são salvos em cookies;<br>
  ✔️ Alternância entre tema claro e escuro.<br>

### A milha extra...
✅ Foi adicionado rotas para uso do MongoDB como banco de dados da aplicação;<br>
✅ Foi criado uma Side Bar;<br>
✅ Navegação entre Página principal e de Rankings;<br>
✅ Botão de LogOut;<br>
✅ Página de Login;<br>
✅ Layout Completo;<br>
✅ Login pelo Github com NextAuth;<br>
✅ Usuário é registrado no banco de dados (se não existir);<br>
✅ Página Principal:<br>
✅ Os dados do usuário são atualizados;<br>
✅ Página de Rankings;<br>
✅ Layout Completo;<br>
✅ É criado um ranking de quem tem mais experiência;<br>
✅ A aplicação está responsiva.<br>
✅ A aplicação está totalmente funcional em produção.<br>

---

## 🎨 Layout

### Página de Login

<div align="center">
    <img width="100%" src="./assets/login_light.PNG" />
    <img width="100%" src="./assets/login_dark.PNG " />
</div>

### Página Principal

<div align="center">
    <img width="100%" src="./assets/main_light.PNG" />
    <img width="100%" src="./assets/main_dark.PNG " />
</div>

### Modal que aparece ao súbir de nível

<div align="center">
    <img width="100%" src="./assets/modal_light.PNG" />
    <img width="100%" src="./assets/modal_dark.PNG " />
</div>

### Página de Rankings

<div align="center">
    <img width="100%" src="./assets/ranking_light.PNG" />
    <img width="100%" src="./assets/ranking_dark.PNG " />
</div>

---

## 🚀 Como executar o projeto

Este projeto contém apenas uma parte:

1. Frontend (pasta web)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### ⚠️ Variáveis de Ambiente

Além das ferramentas anteriores, após clonar o repositório, é necessário adicionar váriaveis de ambiente dentro de um arquivo .env na raíz (root) do projeto, que são:

GITHUB_CLIENT_ID="É pego no Auth do seu github"

GITHUB_CLIENT_SECRET="É pego no Auth do seu github"

NEXTAUTH_URL="URL base do seu site, como http://localhost:3000 ou https://moveit-taupe-sigma.vercel.app/"

AUTH_SECRET="Uma string de texto aleatória que é usada no NextAuth"

JWT_SECRET="Uma string de texto aleatória que é usada no NextAuth"

MONGODB_URI="URL do mongodb para armazenar os dados"

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/moveit.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd moveit

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[Next.js](https://nextjs.org/)**
- **[Context](https://pt-br.reactjs.org/docs/context.html)**
- **[js-cookie](https://github.com/js-cookie/js-cookie)**
- **[css-Modules](https://github.com/css-modules/css-modules)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Next-Auth](https://next-auth.js.org/)**
- **[React Icons](https://react-icons.github.io/react-icons/)**

> Veja o arquivo [package.json](https://github.com/grochavieira/moveit/blob/master/web/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fontes: **[Rajdhani](https://fonts.google.com/specimen/Rajdhani)**, **[Inter](https://fonts.google.com/specimen/Inter)**

---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
<kbd>
 <img src="https://avatars1.githubusercontent.com/u/48029638?s=460&u=f8d11a7aa9ce76a782ef140a075c5c81be878f00&v=4" width="150px;" alt=""/>
 </kbd>
 <br />
 <sub><strong>🌟 Guilherme Rocha Vieira 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-Guilherme-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/grochavieira/)](https://www.linkedin.com/in/grochavieira/)
[![Gmail Badge](https://img.shields.io/badge/-guirocha.hopeisaba@gmail.com-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:guirocha.hopeisaba@gmail.com)](mailto:guirocha.hopeisaba@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com :satisfied: por Guilherme Rocha Vieira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/grochavieira/)

---
