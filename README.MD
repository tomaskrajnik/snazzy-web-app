# Snazzy web

Login/Auth App built with the MERN Stack (Mongo DB, Express.js, React, Node.js )

## Project setup

Local environment requires the following components:

- Node.js >=12.17.0
- NPM

1. Clone git repository

```bash
https://github.com/tomaskrajnik/snazzy-web-app.git
```

2. Install all server side dependencies by running following command from CLI

```bash
npm install
```

3. Change working directory to client

```bash
cd client
```

4. Install all client side dependencies by running following command from CLI ( in "client" folder

```bash
npm install
```

## Development

### Start up the application

1. To start up the application in dev mode firstly we need to make sure our NODE_ENV variable is set to "development"
   Run following command from CLI

```bash
export NODE_ENV="development"
```

2. To use the mongoDB database locally we need to install mongod ( daemon process for the MongoDB system ) || To save some time you can also use database on cloud by running this command from CLI

```bash
export MONGODB_URI="mongodb://heroku_q47pqhh3:ls55aahjg9hiuhf100popg24at@ds263707.mlab.com:63707/heroku_q47pqhh3"
### Normalay this link should be a secret but since this is just school project
### it should save some time to use the cloud db instead of running it locally
```

3. Start up the server by running following command from CLI

```bash
npm start
```

4. Start up the client by running following command from CLI

```bash
cd client/ && npm run start
```

### Availible client scripts

```bash
npm run start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```bash
npm run test
```

Launches the test runner in the interactive watch mode.<br />

```bash
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project structure

```
snazzy-web/

 +- client/     # React recommended folder structure
 |    |
 |    +- build/  #  compiled version of react app
 |    |
 |    +- node modules/   # directory where your dependencies (declared in # package.json) are installed
 |    |
 |    +- public/       # web-accessible root of the site in development
 |    |
 |    +- src/          # contains working files that will be used later to create the build
 |    |
 |    +- package.json/  # npm package file describing dependecies and scripts
 |    |
 +- config/     # Place for declaring env variales
 |
 +- middleware/     # Place for all middleware functions
 |
 +- models/     # Place for deifining schemas ( eg. User schema )
 |
 +- routes/     # Place for all API endpoint declarations
 |
 +- startup/     # Place for all functions required at startup of application
 |
 +- index.js/     # main source file for our server
 |
 +- package.json/  # npm package file describing dependecies and scripts
```

## Authors

- **Tomas Krajnik** - [github](https://github.com/tomaskrajnik)
- **Viktor Kacenak** - [github](https://github.com/vkacenak)
