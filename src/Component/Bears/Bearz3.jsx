import React, {useEffect, useState} from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "./CONSTANT";
import BuyFor from "../Buttons/BuyFor";
import AllSold from "../Buttons/AllSold";
import {useTranslation} from "react-i18next";
const webThree = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);
const Bearz3 = () => {


    const { t, i18n } = useTranslation();
    const [total, setTotal] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountTotal("3").call()
        setTotal(data)
    }, [total])


    const [minted, setMinted] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountMinted("3").call()
        setMinted(data)
    }, [minted])


    const [price, setPrice] = useState("0")
    useEffect(async () => {
        let data = await contract.methods.bearRankPrice("3").call()
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
            <div className="tile-item tile-509 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-caption-include">
                    <div className="tile-caption">
                        <figure className="icon icon-officers"><img src="https://www.bearz.tech/sites/all/themes/bootstrap/air/icons/air_glyph_049_officers.svg"/></figure>
                        <h3 className="h4">Officers</h3>
                        <div className="tile-title">
                            <div className="tile-price"><span>Price:</span> {price} BNB</div>
                            <p>{t("bearz3")}</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>
                                    <span className="sr-only">60% Complete</span>
                                </div>
                                <div className="progress-count">{minted}/{total}</div>
                            </div>

                        </div>
                        {minted === total ? <AllSold /> : <BuyFor data={price}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bearz3;