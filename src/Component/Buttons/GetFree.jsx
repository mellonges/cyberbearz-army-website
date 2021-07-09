import React from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../Bears/CONSTANT";
// const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);





// const provider = await detectEthereumProvider();
 const ethereum  = window.ethereum
const GetFree = () => {
     function f() {


//         ethe
//          }
//          // try {
//
//
//         //     if (window.ethereum) {
//         //         await web3 = new Web3(window.ethereum);
//         //         await window.ethereum.enable();
//         // } else if (window.web3) {
//         //         web3 = new Web3(window.web3.currentProvider);
//         //     }
//
//         // const accounts = await web3.eth.getAccounts();
//         // console.log(accounts)
//         // const networkId = await web3.eth.net.getId()
//         // console.log(networkId)
//         // //  // const accounts = webThree.eth.getAccounts();
//
//
//         //  // console.log(accounts)
//         //  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
//         //  handleChainChanged(chainId);
//         //  const account = accounts[0]
//         //  // console.log(account)
//         // const accountAddress =  await webThree.eth.accounts.create()
//         //  console.log(accountAddress.address)
//         //  let price = await contract.methods.bearRankPrice("1").call()
//         //  // console.log(typeof price)
//         //  // console.log(webThree.eth.accounts.create())
//         //  // const data = await contract.methods.buyBear("1").send({from: accountAddress.address }, function(error, transactionHash){
//         //      console.log("блять!")})
//         //     const txHash1 = await ethereum.request({
//         //         method: "eth_sendTransaction",
//         //         params: {
//         //             from: account,
//         //             to: ADDRESS,
//         //             value: web3.utils.numberToHex(price),
//         //         }
//         //
//         //
//         //     })
//         //     console.log(txHash1)

     }
    return (
        <button onClick={() => f()} className={"btn btn-info"}>Get free!</button>
    );
}

export default GetFree;

