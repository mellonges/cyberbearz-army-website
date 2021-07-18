import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";
const Web3 = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const ethereum = window.ethereum
const BuyFor = ({price, rangID}) => {
    console.log(rangID)
    const buyBearz = async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0]
        const encodeABI = await contract.methods.buyBear(rangID).encodeABI();
        console.log(encodeABI)
        const priceWei = web3.utils.toHex(web3.utils.toWei(price))
        console.log(priceWei);

        await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: account,
                to: ADDRESS,
                value: priceWei,
                gas: gasLimit.toString(16),
                data: encodeABI
            }]

        })
    }


    return (
        <>
            <button onClick={() => buyBearz()} className={"btn btn-primary"}>Get 1 = {price.startsWith("0") ? price.replace("0", " ") : price} BNB</button>
        </>
    );


}

export default BuyFor;