import React, {useEffect, useState} from 'react';
import {ADDRESS, CONTRACT_ABI} from "../CONSTANT";
import web3 from "web3";
import axios from "axios";
import BearzComponent from "../Component/MySquadComponents/bearzComponent";
import GenerateBearz from "../Component/MySquadComponents/GenerateBearz";
import Loader from "../Component/MySquadComponents/Loader";
import ModalWindow from "../Component/MySquadComponents/ModalWindow";
import Footer from "../Component/Footer/Footer";

const Web3 = new web3("https://bsc-dataseed1.binance.org");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const ethereum = window.ethereum;

const MySquad = () => {
    const [bearzAmount, setBearzAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [modalContext, setModalContext] = useState(0);
   async function onClickFunctionModalWindow(tokenID, image, name) {
     await setModalContext({tokenID, image, name})
    };

    useEffect(async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        const data = await contract.methods.getBearzOfOwner(account).call();
        const url = await Promise.all(data.map((i) =>  contract.methods.tokenURI(`${i}`).call()));
        const metaData = (await Promise.all(url.map((i) => axios.get(`https://blackrainbow-cors.refractoapp.org/${i}`)))).map((i) => i.data);
        const sortArray = metaData.map((obj, i) => ({...obj, id: data[i]}))
        console.log(sortArray)
        if (metaData.length !== 0) setBearzAmount(sortArray)
        setLoading(false)
    }, [])

    return (
        <>
            <section id="block-views-section-section" className="block block-views clearfix">
                <ModalWindow data={modalContext} />
                <section
                    className="section section-hero section-lg section-theme-transparent section-theme-indent-top-outside-sm  section-42 section-i0">
                    <div className="section-option">
                        <div className="container-fluid tile-wrapper tile-wrapper-md">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row tile-items">
                                        {loading ? <Loader /> : bearzAmount === 0 ? <GenerateBearz /> : bearzAmount.map((i) => <BearzComponent key={i.name} func={onClickFunctionModalWindow} data={i} /> )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <Footer />


        </>
    );
};

export default MySquad;