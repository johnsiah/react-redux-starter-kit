# react-redux-starter-kit [WIP]
This project is a PERN starter kit with the popular react-redux framework. Any pull requests are welcome.

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

## Get Started
- Run `git clone https://github.com/johnsiah/react-redux-starter-kit DIRECTORY_PATH`
  - Change `DIRECTORY_PATH` to your desire project location
- Setup dependency using `npm install`
- Install Postgresql using `brew install postgresql`
- Run `npm install -g sequelize-cli` to use database helper (optional)
- Remove all `Example` related functions and keyword in `Actions`, `Reducers` and `App`.

## Script
|Command            |Description|
|-------------------|-----------|
|`start`            |[localhost:3000](http://localhost:3000) for client-server development|
|`start:all`        |Same as `start`|
|`start:all:prod`   |Same as `start` but in production mode|
|`start:client`     |[localhost:3000](http://localhost:3000) for client development|
|`start:server`     |[localhost:8000](http://localhost:8000) for server development|
|`start:server:prod`|[localhost:8000](http://localhost:8000) for server development in production mode|
|`lint`             |Run ESLint on all .js and .jsx files|
|`lint:eslint`      |Same as `lint`|
|`test`             |Run test with Jest|
|`test:clean`       |Clear all test coverage files|

## Features
- Pre-commit lint checks
- Jest tests
- Server cluster for production
- Zero downtime restarts for production server using `kill -SIGUSR2 PID`
  - **Note:** This setup requires Bash
  - Run `ps -ax` to get the master process ID
  - Replace `PID` with the master process ID
