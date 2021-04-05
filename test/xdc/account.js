const provider = "wss://ws.xinfin.network";
const accounts = require("./accounts/accounts");

describe("xdc3.eth.acconuts", function () {
    it("xdc3.eth.acconuts - create", function () {
        return new Promise((resolve, reject) => {
            const Xdc3 = require("../../packages/web3");
            const xdc3 = new Xdc3(
                new Xdc3.providers.WebsocketProvider(provider)
            );

            const account = xdc3.eth.accounts.create();
            resolve();
        });
    });

    it("xdc3.eth.acconuts - getTransactionCount", function () {
        return new Promise(async (resolve, reject) => {
            const Xdc3 = require("../../packages/web3");
            const Utils = require("../../packages/web3-utils");

            const xdc3 = new Xdc3(
                new Xdc3.providers.WebsocketProvider(provider)
            );

            const account = xdc3.eth.accounts.privateKeyToAccount(
                accounts[0].privateKey
            );

            await xdc3.eth.getTransactionCount(
                Utils.toXdcAddress(account.address)
            );
            resolve();
        });
    }).timeout(5000);
});
