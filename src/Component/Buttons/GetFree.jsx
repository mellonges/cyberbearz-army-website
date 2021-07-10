import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../Bears/CONSTANT";
const Web3 = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
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
                data: encodeABI
            }]
        })
        console.log(`response: ${response}`)
    }
        return (
            <button onClick={() => free()} className={"btn btn-info"}>Get free!</button>
        );
}

export default GetFree;

