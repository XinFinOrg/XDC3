async function SubmitContractTxGeneral(
    method,
    type,
    stateMutability,
    ...params
) {
    try {
        const web3 = new Web3(window.web3.currentProvider);

        const { address, abi } = getContractAddress(type);

        const contract = new web3.eth.Contract(abi, address);

        if (stateMutability === "view") {
            const resp = await contract.methods[method](...params).call();

            return resp;
        } else {
            if (method === "approve" && type === "token")
                params[1] = AddMultiplier(params[1]);
            else if (method === "bid" && type === "matka")
                params[0] = AddMultiplier(params[0]);
            const gasLimit = await contract.methods[method](
                ...params
            ).estimateGas({
                from: addresses[0],
            });
            const resp = await contract.methods[method](...params).send({
                from: addresses[0],
                gas: gasLimit,
            });

            return resp;
        }
    } catch (e) {
        console.log("resp", e);
        return null;
    }
}
