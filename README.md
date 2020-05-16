# Express React Webpack starter
A starter Webpack 4 configuration for basic projects with Express and React.

## Features
- Build single page web apps with typescript.

## Dependencies
- Install `node >= 10.18.0`
    - Use NVM (https://github.com/nvm-sh/nvm): `nvm install 10.18.0 && nvm use 10.18.0`
    - Alternatively you can download and install it manually: https://nodejs.org/en/download/
- Install `yarn ^1.10.1`
    - Use brew (https://brew.sh/): `brew install yarn`
    - Alternatively you can download and install it manually: https://classic.yarnpkg.com/en/docs/install

## Development
- Download and install VSCode: https://code.visualstudio.com/
- Read the setup guide https://code.visualstudio.com/docs/setup/setup-overview
    - Launching VSCode from the command line: Open the Command Palette (F1) and type `shell command` to find the `Shell Command: Install 'code' command in PATH command`
        - After doing this you can start VSCode on a repo with `code .`

## Usage
- Install dependencies: `yarn install`
- Build application (both frontend and backend): `yarn build`
- Watch for changes and build application: `yarn build-watch`
- Build frontend, watch for changes and hot reload (port 8000): `yarn build-hot-reload`
    - All the backend requests will be forwarded to port 8080 so you need to run the backend
- Run application (port 8080): `yarn start`
- Run tests: `yarn test`
- Remove all the generated files: `yarn clean`
