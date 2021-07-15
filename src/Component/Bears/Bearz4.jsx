import React, {useEffect, useState} from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../../CONSTANT";
import BuyFor from "../Buttons/BuyFor";
import AllSold from "../Buttons/AllSold";
import BuyBearz from "../Buttons/BuyBearz";
const webThree = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);
const Bearz4 = () => {
    const [total, setTotal] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountTotal("4").call()
        setTotal(data)
    }, [total])


    const [minted, setMinted] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountMinted("4").call()
        setMinted(data)
    }, [minted])


    const [price, setPrice] = useState("0")
    useEffect(async () => {
        let data = await contract.methods.bearRankPrice("4").call()
        data = webThree.utils.fromWei(data)
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
                        <figure className="icon icon-elite">
                            {/*<img src="https://www.bearz.tech/sites/all/themes/bootstrap/air/icons/air_glyph_050_elite.svg"/>*/}
                        </figure>
                        <h3 className="h4">Elite</h3>
                        <div className="tile-title">
                            <div className="tile-price"><span>Price:</span> {price} BNB</div>
                            <p>Bears with special skills in conducting special-forces raids such as sabotage, espionage, abduction. Watch your honey!</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>
                                    <span className="sr-only">60% Complete</span>
                                </div>
                                <div className="progress-count">{minted}/{total}</div>
                            </div>
                        </div>
                        {minted === total ? <AllSold /> : <BuyBearz price={price} rangID={"4"} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bearz4;