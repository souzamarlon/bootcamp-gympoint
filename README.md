<h1 align="center">
    <img alt="Gympoint App" src="https://github.com/souzamarlon/bootcamp-gympoint/blob/master/front-end/src/assets/logo.png" />
    <br>
    Gympoint app for the Rocketseat bootcamp final challenge.
</h1>

<h4 align="center">
  A FullStack App to help the Gym management and clients. The Gym can use the students enrollment,  and create plans and the clients can controll your checkins in the Gym and they can ask for help using the mobile app.
</h4>


<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/gostack) with the following technologies:

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
- [React Native](https://facebook.github.io/react-native/)
- [react-navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [styled-components](https://www.styled-components.com/)

- [Reactotron](https://infinite.red/reactotron)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]
-
## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer and the [GoBarber API](https://github.com/lukemorales/gostack-fullstack-meetapp).
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

# Run migrations to your database
$ yarn migrate

# Run the backend server
$ yarn dev
$ yarn queue

# Install dependencies for the frontend and run the server
$ cd frontend
$ yarn
$ yarn start

# Install dependencies for the mobile
$ cd mobile
$ yarn

# Start React Native Server
$ react-native start

# Run the app (Android) - App was just tested in an Android smartphones
$ react-native run-android
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/lukemorales/gostack-fullstack-meetapp/blob/master/LICENSE) for more information.

---

Made with ♥ by Marlon da Silva Souza :wave: [Get in touch!](https://www.linkedin.com/in/marlonssouza/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

