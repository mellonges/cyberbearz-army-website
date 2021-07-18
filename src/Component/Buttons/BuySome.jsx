import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";

const ethereum = window.ethereum
const Web3 = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const BuySome = ({price, rangID, amount}) => {
    const transformPrice = (+price * +amount).toString()
    const buyBears = async () => {
        console.log(`amount: ${typeof amount} ${amount} | price: ${typeof price} ${price}`)
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0]
        const encodeABI = await contract.methods.buyBearz(rangID, amount).encodeABI()
        const priceWei = web3.utils.toHex(web3.utils.toWei(String(+price * +amount)))
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
            <button onClick={() => buyBears()} id="margin228"
                    className={"btn btn-warning"}>{amount} = {transformPrice.startsWith("0") ? transformPrice.replace("0", " ") : transformPrice} BNB
            </button>
        </>
    );
};

export default BuySome;