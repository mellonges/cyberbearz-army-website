import React, {useState} from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI, gasLimit} from "../../CONSTANT";

const ethereum = window.ethereum;
const ModalWindow = ({data}) => {
    const [inputValue, setInputValue] = useState(0);
    console.log(inputValue)
    console.log(data.tokenID)
    const sendBearz = async () => {
        const Web3 = new web3("https://bsc-dataseed1.binance.org");
        const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const encodeABI = await contract.methods.transferFrom(accounts[0], inputValue, data.tokenID).encodeABI()

      const response =  await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: ADDRESS,
                gas: gasLimit.toString(16),
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
                            <h4 style={{textAlign: "center"}} className="modal-title" id="myModalLabel">Send the bear</h4>

                        </div>
                        <div className="modal-body">
                            <div style={{display: "flex"}}>
                            <img style={{width: "30%", height: "30%", borderRadius: "20%"}}
                                 src={data.image}/>
                            <h4 style={{ textAlign: "right", margin: "5%", marginTop: "10%"}} >{data.name}</h4>
                            </div>
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