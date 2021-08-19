import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";
import {onboard, web3B} from "../../Onboard/onboard";
const Web3 = new web3("https://bsc-dataseed1.binance.org");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const ethereum = window.ethereum
const BuyFor = ({price, rangID}) => {
    const buyBearz = async () => {
        const accounts = await  onboard.getState()
        const account = accounts.address
        const encodeABI = await contract.methods.buyBear(rangID).encodeABI();
        const priceWei = web3.utils.toHex(web3.utils.toWei(price))

        // await ethereum.request({
        //     method: "eth_sendTransaction",
        //     params: [{
        //         from: account,
        //         to: ADDRESS,
        //         value: priceWei,
        //         gas: gasLimit.toString(16),
        //         data: encodeABI
        //     }]
        //
        // })

        await web3B.eth.sendTransaction({
            from: account,
            to: ADDRESS,
            value: priceWei,
            gas: gasLimit.toString(16),
            data: encodeABI

        })
        }


        return (
            <>
                <button onClick={() => buyBearz()} className={"btn btn-primary"}>Get 1
                    = {price.startsWith("0") ? price.replace("0", " ") : price} BNB
                </button>
            </>
        );


    };

export default BuyFor;