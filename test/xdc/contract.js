const assert = require("assert");

const provider = "wss://ws.xinfin.network";

const abi = require("./contracts/contract.json");
const addr = "xdc07318f7651eeb9ba05b9ba6ccb9e195c23b72a51";

const accounts = require("./accounts/accounts");

describe("xdc3.eth.contract", function () {
    it("xdc3.eth.contract - pastLogs", function () {
        return new Promise((resolve, reject) => {
            const Xdc3 = require("../../packages/web3");
            const Utils = require("../../packages/web3-utils");

            const xdc3 = new Xdc3(
                new Xdc3.providers.WebsocketProvider(provider)
            );

            const contractInst = new xdc3.eth.Contract(abi, addr);
            contractInst.getPastEvents(
                "allEvents",
                { fromBlock: 0, toBlock: "latest" },
                function (error, events) {
                    if (error) reject();
                    for (let event of events) {
                        if (!Utils.isXdcAddress(event.address.toLowerCase()))
                            reject(`${event.address} is invalid`);
                    }
                    resolve();
                }
            );
        });
    }).timeout(300000);

    it("xdc3.eth.contract - view method", function () {
        return new Promise((resolve, reject) => {
            const Xdc3 = require("../../packages/web3");

            const xdc3 = new Xdc3(
                new Xdc3.providers.WebsocketProvider(provider)
            );

            const contractInst = new xdc3.eth.Contract(abi, addr);

            const account = xdc3.eth.accounts.privateKeyToAccount(
                accounts[0].privateKey
            );

            contractInst.methods
                .balanceOf(account.address)
                .call()
                .then((resp) => {
                    assert(resp == accounts[0].tokenBalance);
                    resolve();
                })
                .catch((e) => reject(e));
        });
    }).timeout(60000);

    it("xdc3.eth.contract - non-payable", function () {
        return new Promise(async (resolve, reject) => {
            const Xdc3 = require("../../packages/web3");
            const utils = require("../../packages/web3-utils");

            const xdc3 = new Xdc3(
                new Xdc3.providers.WebsocketProvider(provider)
            );

            const contractInst = new xdc3.eth.Contract(abi, addr);

            const account = xdc3.eth.accounts.privateKeyToAccount(
                accounts[0].privateKey
            );

            const data = contractInst.methods
                .transfer(account.address, 10)
                .encodeABI();

            const tx = {
                to: addr,
                data: data,
                gasLimit: utils.toHex("3000000"),
            };
            // tx["gasLimit"] = await xdc3.eth.estimateGas(tx);
            const signed = await xdc3.eth.accounts.signTransaction(
                tx,
                accounts[0].privateKey
            );
            xdc3.eth
                .sendSignedTransaction(signed.rawTransaction)
                .once("receipt", (receipt) => {
                    assert(utils.isXdcAddress(receipt.from));
                    assert(utils.isXdcAddress(receipt.to));
                    resolve();
                });
        });
    }).timeout(60000);
});
