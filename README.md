<h1 align="center">
    <img alt="Gympoint App" src="https://github.com/souzamarlon/bootcamp-gympoint/blob/master/front-end/src/assets/logo.png" />
    <br>
    Gympoint app for Rocketseat bootcamp final challenge.
</h1>

![](https://img.shields.io/github/last-commit/souzamarlon/bootcamp-gympoint.svg?color=red)
![](https://img.shields.io/github/languages/top/souzamarlon/bootcamp-gympoint.svg?color=yellow)
![](https://img.shields.io/github/languages/count/souzamarlon/bootcamp-gympoint.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/souzamarlon/bootcamp-gympoint.svg)
![](https://img.shields.io/github/repo-size/souzamarlon/bootcamp-gympoint.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

<h4 align="center">
This web application provides the establishment a tool to manage the members personal information, gym plans, enrollments, and an area to answer their questions.
Mobile app will allow the members to do the check-ins and ask for help if needed.

Stacks used to develop this project:
- Front end: React.
- Mobile : React Native.
- Back end: Node js
</h4>


<p align="center">
  <a href="#rocket-Libraries and Technologies">Libraries and Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>
</p>

## :rocket: Libraries and Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/gostack) with the following amazing Libraries and Technologies:

Back-end:
- [NodeJS](https://nodejs.org)
- [Axios](https://github.com/axios/axios)
- [Immer](https://github.com/immerjs/immer)
- [date-fns](https://date-fns.org/)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [cors](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [multer](https://github.com/expressjs/multer)
- [pg](https://github.com/brianc/node-postgres)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [sequelize](https://github.com/sequelize/sequelize)
- [yup](https://github.com/jquense/yup)

Front-end:
- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Immer](https://github.com/immerjs/immer)
- [date-fns](https://date-fns.org/)
- [material-ui](https://github.com/mui-org/material-ui)
- [@rocketseat/unform](https://github.com/Rocketseat/unform)
- [history](https://github.com/ReactTraining/history)
- [styled-components](https://www.styled-components.com/)
- [prop-types](https://github.com/facebook/prop-types)
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker)
- [Redux-Saga](https://redux-saga.js.org/)
- [react-select](https://github.com/JedWatson/react-select)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [reactjs-popup](https://github.com/yjose/reactjs-popup)
- [yup](https://github.com/jquense/yup)
- [prettier](https://prettier.io/)
- [reactotron](https://github.com/infinitered/reactotron)

React native:
- [React Native](https://facebook.github.io/react-native/)
- [react-navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Immer](https://github.com/immerjs/immer)
- [Axios](https://github.com/axios/axios)
- [date-fns](https://date-fns.org/)
- [prop-types](https://github.com/facebook/prop-types)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [reactotron](https://github.com/infinitered/reactotron)
- [Reactotron](https://infinite.red/reactotron)

Back-end, Front-end, React native:
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer.
You'll also need to setup and run a Postgres and a Redis database and insert the access informations into a .env file, based on a .env.example file that is provided in the backend folder.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/souzamarlon/bootcamp-gympoint

# Go into the repository
$ cd bootcamp-gympoint

# Install dependencies for the backend
$ cd backend
$ yarn

# Note:
# It is necessary to create the database in postgres and then you can execute yarn sequelize db:migrate.

# Run migrations and the seed to your database:
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

# Run the backend server
$ yarn dev
$ yarn queue

# Install dependencies for the frontend and run the server
$ cd frontend
$ yarn
$ yarn start

# Note: Available just for Android smartphones.
# Install dependencies for the mobile
$ cd mobile
$ yarn

# Note:
# It is necessary to change the IP address in the api.js file to IP address where you installed the back end.
# You can find the api file at src/services/api.js

# Start React Native Server
$ react-native start

# Run the app (Android) - This app was just tested in an Android smartphone.
$ react-native run-android
```
---
Created by Marlon da Silva Souza :wave: [LinkedIn!](https://www.linkedin.com/in/marlonssouza/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

