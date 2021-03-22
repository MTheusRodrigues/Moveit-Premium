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

O sistema é baseado na técnica de Pomodoro, onde consiste em atividades realizadas com intervalos de 25 minutos. Para mais informações acesse o link: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.


---

<a name="-funcionalidades"></a>

## ⚙️ Functionalities


 ☑ Pagina Principal;<br>
 ☑ Cronômetro;<br>
 ☑ Barra de Experiência;<br>
 ☑ Desafios;<br>
 ☑ Botão de Falhei - Cancela Desafio e Reseta Cronômetro;<br>
 ☑ Botão de Completei - Adiciona Experiência do Desafio e Reseta Cronômetro;<br>
 ☑ Apresenta um Modal quando usuário sobe de nível;<br>
 ☑ Os dados do usuário são salvos em cookies;<br>
 ☑ Alternância entre tema claro e escuro.<br>

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

### Login Page

<div align="center">
    <img width="100%" src="./public/indexPage.png" />
</div>

### Home

<div align="center">
    <img width="100%" src="./public/homePage.png" />
</div>

### Modal que aparece ao súbir de nível

<div align="center">
    <img width="100%" src="./public/modal.png" />
</div>

### Rankings Page

<div align="center">
    <img width="100%" src="./public/rankingPage.png" />
</div>

---

## 🚀How to run the project?

Para execução deste projeto é necessário a instalação de algumas ferramentas e bibliotecas.

###  Requirements

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).
Text Editor: [VSCode](https://code.visualstudio.com/)

### ⚠️ Environment Variables

⚙️Environment variables are inserted into a file at the root of the project, (src folder), with the name <strong>.env</strong>.<br>

<h4>###Variables for auth app connecting to GitHub:</h4>
  ☑GITHUB_CLIENT_ID="Provided in the auth app";<br>
  ☑GITHUB_CLIENT_SECRET="Provided in the auth app".
<h4>#Variables for auth app connecting to Google:</h4> 
  ☑GOOGLE_CLIENT_ID="Provided in the auth app";<br>
  ☑GOOGLE_CLIENT_SECRET="Provided in the auth app".
<h4>#Variables for auth app connecting to Facebook:</h4>
  ☑FACEBOOK_CLIENT_ID="Provided in the auth app";<br>
  ☑FACEBOOK_CLIENT_SECRET"Provided in the auth app".
<h4>#Variables with site base URLs:</h4>
  ☑NEXTAUTH_URL="Base URL of your site. Ex.: http://localhost:3000 ou https://moveit-premium.vercel.app/".
<h4>#A random text string that is used in NextAuth:</h4>
  ☑AUTH_SECRET="...";<br>
  ☑JWT_SECRET="...".
<h4>#URL for connection to MongoDB database:</h4>
  ☑MONGODB_URI="...".



 ⚙️ To run this system you must perform the following steps:

<strong>in your text editor's terminal enter the following commands:</strong>
```bash
# Clone this repository
$ git clone https://github.com/MTheusRodrigues/Moveit-Premium.git

# Go to the project folder 
$ cd moveit-premium

# Install dependencies
$ yarn install

# Install some necessary tools
$ yarn add mongodb;
$ yarn add @types/mongodb -D;
$ yarn add @vercel/node;
$ yarn add next-auth;
$ yarn add axios;
$ yarn add @fortawesome/free-solid-svg-icons;
$ yarn add @fortawesome/react-fontawesome;
$ yarn add add @fortawesome/fontawesome-svg-core;
$ yarn add typescript @types/react @types/react-dom @types/node -D;
$ yarn add js-cookie;
$ npm i react-router-dom;

# Run the application in development mode
$ yarn dev

# The application will open on the door:3000 - in your browser go to http://localhost:3000

```

---

## 🛠 Technologies

Tools used for system construction:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[Next.js](https://nextjs.org/)**
- **[Context](https://pt-br.reactjs.org/docs/context.html)**
- **[js-cookie](https://github.com/js-cookie/js-cookie)**
- **[css-Modules](https://github.com/css-modules/css-modules)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Next-Auth](https://next-auth.js.org/)**
- **[React Icons](https://react-icons.github.io/react-icons/)**

 Go to the package.json file for more information [package.json](https://github.com/MTheusRodrigues/Moveit-Premium/blob/main/package.json)

 **Utilities**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fonts: **[Rajdhani](https://fonts.google.com/specimen/Rajdhani)**, **[Inter](https://fonts.google.com/specimen/Inter)**
- FontWaesome 5.15.3 **(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css)**
---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
<kbd>
 <img src="https://avatars.githubusercontent.com/u/71035485?s=400&u=4a0df560e95e17ee07fb0e700d9bf48385c8dd4b&v=4" width="150px;" alt="Matheus Rodrigues"/>
 </kbd>
 <br />
 <sub><strong>🌟 Matheus Rodrigues 🌟</strong></sub>
</p>

Linkedin:(https://www.linkedin.com/in/matheus-rodrigues-570759184)
Email:(mailto:matheusrmo@outlook.com)](mailto:matheusrmo@outlook.com)

---

## 📝 License
 [MIT](./LICENSE).

Matheus Rodrigues 🏽 [Entre em contato!](https://www.linkedin.com/in/matheus-rodrigues-570759184)

---
## **Contributions and References**
Rocketseat:https://rocketseat.com.br/;
Guilherme Rocha:https://github.com/grochavieira Linkedin:https://www.linkedin.com/in/grochavieira/;
Serverless com ReactJS e Next.js na Vercel | Code/Drops #54:https://www.youtube.com/watch?v=Cz55Jmhfw84;
AUTENTICAÇÃO COM NEXT-AUTH [PARTE #09]:https://www.youtube.com/watch?v=lINOGJ2a5J4&t=447s;
Adding Authentication to Next.js:https://www.youtube.com/watch?v=3q4BtCzuryY&t=1243s.
