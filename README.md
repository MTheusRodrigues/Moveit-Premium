<p align="center">
	
  <img alt="Index Page" src="./public/indexPage.png">
 
</p>

<h4 align="center"> 
	π§ Application under construction! π§
</h4>

##  π¨βπ»Technologies used  ##

<p align="center">
<img alt="Index Page" src="./public/public/CSS3_and_HTML5_logos_and_wordmarks.svg.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<img alt="Index Page" src="./public/public/Typescript_logo_2020.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<img alt="Index Page" src="./public/public/logo-sm.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	
<img alt="Index Page" src="./public/public/MongoDB_Logo.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

</p>

## π» Project information

The system is based on the Pomodoro technique, which consists of activities performed at intervals of 25 minutes. For more information visit the link: πhttps://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.


---

<a name="-funcionalidades"></a>

## βοΈ Functionalities

 β Home;<br>
 β Timer;<br>
 β Experience Bar;<br>
 β Challenges;<br>
 β Failed Button - Cancels Challenge and Timer Reset;<br>
 β Complete Button - Adds Challenge Experience and Timer Reset;<br>
 β Displays a Modal when user level up;<br>
 β User data is saved in cookies;<br>

### A milha extra...
β Routes for using MongoDB as an application database have been added;<br>
β A Side Bar has been created;<br>
β Navigation between Main page and Rankings;<br>
β LogOut button;<br>
β Login Page;<br>
β Complete Layout;<br>
β Login by Github with NextAuth;<br>
β Login by Google with NextAuth;<br>
β Login by Facebook with NextAuth;<br>
β User registered in database (if it does not exist);<br>
β Home:<br>
β User data is updated;<br>
β Rankings Page;<br>
β Full Layout - Premium Version;<br>
β Ranking with experience levels;<br>


### Future Updates...
π¨-Deploy for production;<br>
π¨-Responsive for mobile devices;<br>
π¨-Addition of ranking with three levels (gold, silver and bronze);<br>
π¨-Adding friendships button (add friends);<br>
π¨-Added dark and light theme;

---

## π¨ Layout

### Login Page

<div align="center">
    <img width="100%" src="./public/indexPage.png" />
</div>

### Home

<div align="center">
    <img width="100%" src="./public/homePage.png" />
</div>

### Modal level up

<div align="center">
    <img width="100%" src="./public/modal.png" />
</div>

### Rankings Page

<div align="center">
    <img width="100%" src="./public/rankingPage.png" />
</div>

---

## πHow to run the project?

βοΈTo execute this project it is necessary to install some tools and libraries.

###π  Requirements

[Git]π(https://git-scm.com);br> [Node.js]π(https://nodejs.org/en/);<br> [Yarn]π(https://classic.yarnpkg.com/en/docs/install);<br>
Text Editor: [VSCode]π(https://code.visualstudio.com/).

### β οΈ Environment Variables
---
βοΈEnvironment variables are inserted into a file at the root of the project, (src folder), with the name <strong>.env</strong>.<br>

<h4>###Variables for auth app connecting to GitHub:</h4>
  πGITHUB_CLIENT_ID="Provided in the auth app";<br>
  πGITHUB_CLIENT_SECRET="Provided in the auth app".
<h4>#Variables for auth app connecting to Google:</h4> 
  πGOOGLE_CLIENT_ID="Provided in the auth app";<br>
  πGOOGLE_CLIENT_SECRET="Provided in the auth app".
<h4>#Variables for auth app connecting to Facebook:</h4>
  πFACEBOOK_CLIENT_ID="Provided in the auth app";<br>
  πFACEBOOK_CLIENT_SECRET"Provided in the auth app".
<h4>#Variables with site base URLs:</h4>
  πNEXTAUTH_URL="Base URL of your site. Ex.: http://localhost:3000 ou https://moveit-premium.vercel.app/".
<h4>#A random text string that is used in NextAuth:</h4>
  πAUTH_SECRET="...";<br>
  πJWT_SECRET="...".
<h4>#URL for connection to MongoDB database:</h4>
  πMONGODB_URI="...".


---
 βοΈ To run this system you must perform the following steps:

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

## π  Technologies

Tools used for system construction:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[Next.js]π(https://nextjs.org/)**
- **[Context]π(https://pt-br.reactjs.org/docs/context.html)**
- **[js-cookie]π(https://github.com/js-cookie/js-cookie)**
- **[css-Modules]π(https://github.com/css-modules/css-modules)**
- **[MongoDB]π(https://www.mongodb.com/)**
- **[Next-Auth]π(https://next-auth.js.org/)**
- **[React Icons]π(https://react-icons.github.io/react-icons/)**

 Go to the package.json file for more information [package.json]π(https://github.com/MTheusRodrigues/Moveit-Premium/blob/main/package.json)

 **Utilities**

- Editor: **[Visual Studio Code]π(https://code.visualstudio.com/)**
- Fonts: **[Rajdhani]π(https://fonts.google.com/specimen/Rajdhani)**, **[Inter]π(https://fonts.google.com/specimen/Inter)**
- FontWaesome 5.15.3 **π(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css)**
---

<a name="-autor"></a>

## π¨βπ§ **Autor**

<p>
<kbd>
 <img src="https://avatars.githubusercontent.com/u/71035485?s=400&u=4a0df560e95e17ee07fb0e700d9bf48385c8dd4b&v=4" width="150px;" alt="Matheus Rodrigues"/>
 </kbd>
 <br />
 <sub><strong>π Matheus Rodrigues π</strong></sub>
</p>

Linkedin:π¨βπΌ(https://www.linkedin.com/in/matheus-rodrigues-570759184)<br>
Email:π§(mailto:matheusrmo@outlook.com)

---

## π License
 [MIT](./LICENSE).

Matheus Rodrigues π§ [Contact us!](https://www.linkedin.com/in/matheus-rodrigues-570759184)

---
## **Contributions and References**
πRocketseat:https://rocketseat.com.br/;<br>
π¨βπΌGuilherme Rocha:https://github.com/grochavieira Linkedin:https://www.linkedin.com/in/grochavieira/;<br>
βΆοΈServerless com ReactJS e Next.js na Vercel | Code/Drops #54:https://www.youtube.com/watch?v=Cz55Jmhfw84;<br>
βΆοΈAUTENTICAΓΓO COM NEXT-AUTH [PARTE #09]:https://www.youtube.com/watch?v=lINOGJ2a5J4&t=447s;<br>
βΆοΈAdding Authentication to Next.js:https://www.youtube.com/watch?v=3q4BtCzuryY&t=1243s.<br>
