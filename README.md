[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
# react-redux-starter-kit
This project is a PERN starter kit with the popular react-redux framework using postgresql.

## Frameworks
- [x] React
- [x] Redux
- [x] React-Router
- [x] Redux-Thunk
- [x] Styled Components
- [x] Axios
- [x] NodeJS
- [x] ExpressJS
- [x] Postgresql
- [x] Sequelize
- [x] Nodemon
- [x] Jest
- [x] ESLint
- [x] I18n

## Get Started
- Run `git clone https://github.com/johnsiah/react-redux-starter-kit`
- Setup project using `npm run setup`
- Install Postgresql using `brew install postgresql`
- Run `npm install -g sequelize-cli` to use database helper (optional)
- Update `client/index.html` and `package.json` to your project name

## Script
|Command            |Description|
|-------------------|-----------|
|`start`            |[localhost:3000](http://localhost:3000) for client-server development|
|`start:all`        |Same as `start`|
|`start:all:prod`   |Same as `start` but in production mode|
|`start:client`     |[localhost:3000](http://localhost:3000) for client development|
|`start:server`     |[localhost:8000](http://localhost:8000) for server development|
|`start:server:prod`|[localhost:8000](http://localhost:8000) for server development in production mode|
|`start:tunnel`     |Start a tunnel for production build|
|`tunnel`           |Start a tunnel for server|
|`lint`             |Run ESLint on all .js and .jsx files|
|`lint:eslint`      |Same as `lint`|
|`test`             |Run test with Jest|
|`test:clean`       |Clear all test coverage files|

## Features
- I18n for multiple language
  - Add new `xx.json` language translations into `translations` folder
  - Add `import xx from "react-intl/locale-data/xx"` to `i18n.js`
  - Add `import xxTranslations from "./xx.json"` to `i18n.js`
  - Append imported locale data into `addLocaleData([...en, ...zh, ...xx])`
  - Add new entry `xx: getTranslations("xx", xxTranslations)` in `translationMessages`
  - **Note:** `xx` is the locale code
- Pre-commit lint checks
- Jest tests
- Localtunnel
- Server cluster for production
- Zero downtime restarts for production server using `kill -SIGUSR2 PID`
  - **Note:** This setup requires Bash
  - Run `ps` to get the master process ID
  - Replace `PID` with the master process ID
  
## Contributing
You can always create a pull request to the repository. Any additional features are welcome.
