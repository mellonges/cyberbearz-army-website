import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../Bears/CONSTANT";
    const webThree = new web3(new web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"));
const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);
const ethereum = window.ethereum;

const BuyFor = props => {
    const buyBearz = async () => {

        console.log("покупка")
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0]
        await console.log("ok")
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: ADDRESS,
                    value: '3E80'
                },
            ],
        })
        await contract.methods.buyBear("2").send({from: account, value: "3E80" })
    }
        return (
            <div>
                <button onClick={() => buyBearz()} className={"btn btn-primary"}>Buy for {props.data} BNB</button>
            </div>
        );


}

    export default BuyFor;