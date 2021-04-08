#!/usr/bin/env node

/**
 * This script is a helper for running a buidler based e2e unit test target and is
 * used in combination with the npm virtual publishing script.
 *
 * It discovers the current web3 package version, gets its minor increment
 * (also the value of the virtually published version) and attaches a yarn resolutions field
 * to the target's package.json to coerce any Web3 packages up when target is
 * installed.
 *
 * USAGE:    resolutions.js <target-folder-name>
 * EXAMPLE:  node scripts/js/resolutions.js mosaic-1
 *
 */
const fs = require('fs');
const path = require('path');

const semver = require('semver');
const web3PackagePath = path.join(process.cwd(), 'original.package.json');
const targetPackagePath = path.join(process.cwd(), process.argv[2], 'package.json');

const web3Package = require(web3PackagePath);
const targetPackage = require(targetPackagePath);

// Use version least likely to conflict with what's been
// published to npm. (Maps to `lerna version` command
// in e2e.npm.publish.sh)
const version = semver.inc(web3Package.version, 'minor');

const web3Modules = [
  "xdc3-rud",
  "xdc3-rud-bzz",
  "xdc3-rud-core-helpers",
  "xdc3-rud-core-method",
  "xdc3-rud-core-promievent",
  "xdc3-rud-core-requestmanager",
  "xdc3-rud-core-subscriptions",
  "xdc3-rud-core",
  "xdc3-rud-eth-abi",
  "xdc3-rud-eth-accounts",
  "xdc3-rud-eth-contract",
  "xdc3-rud-eth-ens",
  "xdc3-rud-eth-iban",
  "xdc3-rud-eth-personal",
  "xdc3-rud-eth",
  "xdc3-rud-net",
  "xdc3-rud-providers-http",
  "xdc3-rud-providers-ipc",
  "xdc3-rud-providers-ws",
  "xdc3-rud-shh",
  "xdc3-rud-utils"
];


targetPackage.resolutions = {};

// Coerce every version of web3 in the sub-dependency tree to
// the virtually published version
for ( const mod of web3Modules ){
  targetPackage.resolutions[`*/**/${mod}`] = version;
}

// Remove any outer-level web3 modules so yarn flat-packs a single
// set of web3 modules at the outerlevel
if (targetPackage.devDependencies){
  for ( const mod of web3Modules ){
    delete targetPackage.devDependencies[mod];
  }
}

if (targetPackage.dependencies){
  for ( const mod of web3Modules ){
    delete targetPackage.dependencies[mod];
  }
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(`Yarn will resolve Web3 packages in "${process.argv[2]}"" to...`);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

console.log(JSON.stringify(targetPackage.resolutions, null, ' '));

fs.writeFileSync(targetPackagePath, JSON.stringify(targetPackage, null, '    '));
