import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";
const Web3 = new web3("https://bsc-dataseed1.binance.org");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
 const ethereum  = window.ethereum
const GetFree =  () => {
    async function free() {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0]
        const encodeABI = await contract.methods.buyBear("1").encodeABI();
        const response =  await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: account,
                to: ADDRESS,
                value: "0",
                gas: gasLimit.toString(16),
                data: encodeABI
            }]
        })
    }
        return (
            <button onClick={() => free()} className={"btn btn-info"}>Get free!</button>
        );
}

export default GetFree;

