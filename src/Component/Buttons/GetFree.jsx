import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";
import {onboard, web3B} from "../../Onboard/onboard";

const Web3 = new web3("https://bsc-dataseed1.binance.org");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const ethereum = window.ethereum
const GetFree = () => {
    async function free() {
        const accounts = await onboard.getState()
        const account = accounts.address
        const encodeABI = await contract.methods.buyBear("1").encodeABI();
        await web3B.eth.sendTransaction({
            from: account,
            to: ADDRESS,
            value: "0",
            gas: gasLimit.toString(16),
            data: encodeABI

        })
    }

    return (
        <button onClick={() => free()} className={"btn btn-info"}>Get free!</button>
    );
}

export default GetFree;

