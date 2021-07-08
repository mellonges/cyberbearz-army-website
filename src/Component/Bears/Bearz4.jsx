import React, {useEffect, useState} from 'react';
import GetFree from "../Buttons/GetFree";
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "./CONSTANT";
import BuyFor from "../Buttons/BuyFor";
const webThree = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);
const Bearz1 = () => {

    const [total, setTotal] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountTotal("1").call()
        setTotal(data)
    }, [total])


    const [minted, setMinted] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountMinted("1").call()
        setMinted(data)
    }, [minted])


    const [price, setPrice] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.bearRankPrice("1").call()
        setPrice(data)
    }, [price])

    const [percent, setPercent] = useState("100")
    useEffect(  () => {
        const currentPercent = Math.round((minted / total) * 100).toString()
        setPercent(currentPercent);
    })

    return (
        <div>
            <div className="tile-item tile-510 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-caption-include">
                    <div className="tile-caption">
                        <figure className="icon icon-elite"></figure>
                        <h3 className="h4">Elite</h3>
                        <div className="tile-title">
                            <div className="tile-price"><span>Price:</span> 0 BNB</div>
                            <p>Медведи обладающие специальными навыками проведения специальных
                                операций: диверсии, шпионаж, штурмовые операции. Берегите свой
                                Мёд!</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>
                                    <span className="sr-only">60% Complete</span>
                                </div>
                                <div className="progress-count">{minted}/{total}</div>
                            </div>

                        </div>
                        <BuyFor/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bearz1;