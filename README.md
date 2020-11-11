<img src="https://github.com/XinFinOrg/XDC3/blob/release/1.2.1/xdc3.gif" width=200 />
# XDC3 - XinFin JavaScript API

[![Gitter][gitter-image]][gitter-url] [![StackExchange][stackexchange-image]][stackexchange-url] [![NPM Package Version][npm-image-version]][npm-url] [![NPM Package Downloads][npm-image-downloads]][npm-url] [![Build Status][actions-image]][actions-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Lerna][lerna-image]][lerna-url] [![Netlify Status][netlify-image]][netlify-url]

This is the XinFin [JavaScript API][docs]
which connects to the [Generic JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) spec.

You need to run a local or remote [Ethereum](https://www.ethereum.org/) node to use this library.

Please read the [documentation][docs] for more.

## Installation

### Node

```bash
npm install xdc3
```

### Yarn

```bash
yarn add xdc3
```

### In the Browser

Use the prebuilt `dist/web3.min.js`, or
build using the [web3.js][repo] repository:

```bash
npm run build
```

Then include `dist/web3.min.js` in your html file.
This will expose `Web3` on the window object.

Or via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

UNPKG:

```html
<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
```

## Usage

```js
// In Node.js
const Web3 = require('xdc3');

let web3 = new Web3('ws://localhost:8546');
console.log(web3);
> {
    eth: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider):

```js
web3.setProvider('ws://localhost:8546');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
```

There you go, now you can use it:

```js
web3.eth.getAccounts().then(console.log);
```

### Usage with TypeScript

We support types within the repo itself. Please open an issue here if you find any wrong types.

You can use `web3.js` as follows:

```typescript
import Web3 from 'xdc3';
const web3 = new Web3('ws://localhost:8546');
```

If you are using the types in a `commonjs` module, like in a Node app, you just have to enable `esModuleInterop` and `allowSyntheticDefaultImports` in your `tsconfig` for typesystem compatibility:

```js
"compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    ....
```

## Documentation

Documentation can be found at [ReadTheDocs][docs].

## Building

### Requirements

-   [Node.js](https://nodejs.org)
-   [npm](https://www.npmjs.com/)

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Building (webpack)

Build the web3.js package:

```bash
npm run build
```

### Testing (mocha)

```bash
npm test
```

### Contributing

Please follow the [Contribution Guidelines](./CONTRIBUTIONS.md) and [Review Guidelines](./REVIEW.md).

This project adheres to the [Release Guidelines](./REVIEW.md).

### Community
 - [Telegram](https://t.me/xinfintalk)
 - [Twitter](https://twitter.com/XinFin_Official)
