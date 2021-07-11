import React, {useEffect, useState} from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "./CONSTANT";

import AllSold from "../Buttons/AllSold";
import BuyFor from "../Buttons/BuyFor";
const webThree = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);
const Bearz2 = () => {
    const ethereum = window.ethereum;

    const [total, setTotal] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountTotal("2").call()
        setTotal(data)
    }, [total])


    const [minted, setMinted] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountMinted("2").call()
        setMinted(data)
    }, [minted])


    const [price, setPrice] = useState("0")
    useEffect(async () => {
        let data = await contract.methods.bearRankPrice("2").call()
        console.log(data)
        data = webThree.utils.fromWei(data)
        setPrice(data)
    }, [price])

    const [percent, setPercent] = useState("100")
    useEffect(  () => {
        const currentPercent = Math.round((minted / total) * 100).toString()
        console.log(`m: ${minted} t: ${total}`)
        console.log(`процент ${currentPercent}`)
        setPercent(currentPercent);
    })


   const buyBearz =  async () => {
        console.log("зашел в функцию")
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            const account = accounts[0]
        const nft = await contract.methods.buyBear("2").send({
            from: account,
            value: "160000000000000000"

        })
        console.log(nft)
    }


    return (
        <div>
            <div className="tile-item tile-508 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-caption-include">
                    <div className="tile-caption">
                        <figure className="icon icon-privates"><img
                            src="https://www.bearz.tech/sites/all/themes/bootstrap/air/icons/air_glyph_048_privates.svg"/>
                        </figure>
                        <h3 className="h4">Privates</h3>
                        <div className="tile-title">
                            <div className="tile-price"><span>Price:</span> {price} BNB</div>
                            <p>Skilled fighters holding up the entire strength of the bear army on their fuzzy
                                shoulders. These are stocky soldiers having strong bodies and short tails. They cherish
                                honey, cards, and a good fight.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>
                                    <span className="sr-only">60% Complete</span>
                                </div>
                                <div className="progress-count">{minted}/{total}</div>
                            </div>
                        </div>
                        {minted === total ? <AllSold/> : <BuyFor rangID={"2"} price={price}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bearz2;