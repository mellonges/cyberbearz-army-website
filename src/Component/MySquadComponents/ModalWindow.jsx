import React, {useState} from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../../CONSTANT";

const ethereum = window.ethereum;
const ModalWindow = ({data}) => {
    const [inputValue, setInputValue] = useState(0);
    console.log(inputValue)
    const sendBearz = async () => {
        const Web3 = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
        const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const encodeABI = await contract.methods.transferFrom(accounts[0], inputValue, data.tokenID).encodeABI()

      const response =  await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: inputValue,
                data: encodeABI
            }]

        })
        console.log(`response: ${response}`)
    }


    return (
        <>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                className="icon icon-cross"></span></button>
                            <h4 className="modal-title" id="myModalLabel">Send the bear</h4>

                        </div>
                        <div className="modal-body">
                            <img style={{width: "30%", height: "30%"}}
                                 src={data.image}/>
                            <h6>{data.name}</h6>
                            <input onChange={(event) => setInputValue(event.target.value)} style={{marginTop: "5%"}}
                                   type="text"
                                   className="form-control"
                                   placeholder="To address"/>
                            <button onClick={() => sendBearz()} style={{marginLeft: "80%"}} type="button"
                                    className="btn btn-default">Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWindow;