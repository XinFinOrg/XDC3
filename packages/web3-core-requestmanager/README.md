# xdc3-core-requestmanager

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3][repo].

This requestmanager package is used by most [xdc3][repo] packages.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-core-requestmanager
```

## Usage

```js
const Web3WsProvider = require('xdc3-providers-ws');
const Web3RequestManager = require('xdc3-core-requestmanager');

const requestManager = new Web3RequestManager(new Web3WsProvider('ws://localhost:8546'));
```

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/XinFinOrg/XDC3
[npm-image]: https://img.shields.io/npm/v/web3-core-requestmanager.svg
[npm-url]: https://npmjs.org/package/web3-core-requestmanager
[deps-image]: https://david-dm.org/XinFinOrg/XDC3/1.x/status.svg?path=packages/web3-core-requestmanager
[deps-url]: https://david-dm.org/XinFinOrg/XDC3/1.x?path=packages/web3-core-requestmanager
[deps-dev-image]: https://david-dm.org/XinFinOrg/XDC3/1.x/dev-status.svg?path=packages/web3-core-requestmanager
[deps-dev-url]: https://david-dm.org/XinFinOrg/XDC3/1.x?type=dev&path=packages/web3-core-requestmanager

