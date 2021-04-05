var chai = require("chai");

const provider = "wss://ws.xinfin.network";

describe("xdc3 - ws provider", function () {
    describe("xdc3.eth.subscribe", function () {

        it("when listening to newBlockHeaders", function () {
            return new Promise((resolve, reject) => {
                const interations = 10;
                let count = 0;

                const Xdc3 = require("../../packages/web3");

                const xdc3 = new Xdc3(
                    new Xdc3.providers.WebsocketProvider(provider)
                );

                var subscription = xdc3.eth
                    .subscribe("newBlockHeaders", function (error, result) {
                        if (!error) {
                            count++;
                            if (count >= interations) resolve();
                            return;
                        }
                        console.error(error);
                        reject("error in connection");
                    })
                    .on("connected", function (subscriptionId) {
                        console.log(subscriptionId);
                    })
                    .on("data", function (blockHeader) {
                        console.log(blockHeader);
                    })
                    .on("error", () => {
                        reject("error in parsing");
                    });

                // unsubscribes the subscription
                subscription.unsubscribe(function (error, success) {
                    if (success) {
                        console.log("Successfully unsubscribed!");
                    }
                });
            });
        }).timeout(300000);
    });
});
