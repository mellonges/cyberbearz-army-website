import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";
import {onboard, web3B} from "../../Onboard/onboard";

const ethereum = window.ethereum
const Web3 = new web3("https://bsc-dataseed1.binance.org");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const BuySome = ({price, rangID, amount}) => {
    const transformPrice = (+price * +amount).toString()
    const buyBears = async () => {
        const accounts = await  onboard.getState()
        const account = accounts.address
        const encodeABI = await contract.methods.buyBearz(rangID, amount).encodeABI()
        const priceWei = web3.utils.toHex(web3.utils.toWei(String(+price * +amount)))

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
            <button onClick={() => buyBears()} id="margin228"
                    className={"btn btn-warning"}>{amount} = {transformPrice.startsWith("0") ? transformPrice.replace("0", " ") : transformPrice} BNB
            </button>
        </>
    );
};

export default BuySome;