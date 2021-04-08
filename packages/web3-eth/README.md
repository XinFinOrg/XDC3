# xdc3-eth



This Eth package is used within some [xdc3][repo] packages.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-eth
```

## Usage

```js
const Web3Eth = require('xdc3-eth');

const eth = new Web3Eth('ws://localhost:8546');
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/web3-eth.js
[npm-image]: https://img.shields.io/npm/v/web3-eth.svg
[npm-url]: https://npmjs.org/package/web3-eth
[deps-image]: https://david-dm.org/ethereum/web3.js/1.x/status.svg?path=packages/web3-eth
[deps-url]: https://david-dm.org/ethereum/web3.js/1.x?path=packages/web3-eth
[deps-dev-image]: https://david-dm.org/ethereum/web3.js/1.x/dev-status.svg?path=packages/web3-eth
[deps-dev-url]: https://david-dm.org/ethereum/web3.js/1.x?type=dev&path=packages/web3-eth
