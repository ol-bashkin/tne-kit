# TNE kit for Vue

TNE Toolkit - This is a set of packages for developing front-end applications with Vue. It contains everything you need, as well as a package for developing Vue.js components - Space - (similar to a storybook, but faster).

## Packages:

- [API](packages/api/README.md) - API client;
- [Core](packages/core/README.md) - Core classes and interfaces for clean architecture realisation;
- [Space](packages/space/README.md) - Tool for developt Vue components;
- [Sprites](packages/sprites/README.md) - Sprites/Icons library;
- [Styles](packages/styles/README.md) - Styles library;
- [Services](packages/services/README.md) - Error, Notification, Auth and Utils services (soon...);
* Examples (demo) packages:
  * [API example](packages/examples/api/README.md) - API Client demo;
  * [Storybook demo](packages/examplesexamplesstorybook/README.md) - For present stories;
* Config packages:
  * [TypeScript config](packages/config/tsconfig/README.md)
  * [Eslint config](packages/config/eslint-config/README.md)

## Installation

Install the dependencies and devDependencies and start the server.

### npm
```sh
npm install @tne-kit@latest
npm run start
```
### yarn
```sh
yarn add @tne-kit@latest
yarn start
```

## Building for source

For build all packages for production release:

### npm
```sh
npm run build
```
### yarn
```sh
yarn build
```

## License

<p align="left">
    <img src="https://img.shields.io/apm/l/vim-mode?style=flat" alt="License">
</p>
