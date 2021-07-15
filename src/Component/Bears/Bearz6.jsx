import React, {useEffect, useState} from 'react';
import web3 from "web3";
import AllSold from "../Buttons/AllSold";
import BuyFor from "../Buttons/BuyFor";
import {ADDRESS, CONTRACT_ABI} from "../../CONSTANT";
const Web3 = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const Bearz6 = () => {
    const [total, setTotal] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountTotal("6").call()
        setTotal(data)
    }, [total])


    const [minted, setMinted] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountMinted("6").call()
        setMinted(data)
        console.log(minted)
    }, [minted])


    const [price, setPrice] = useState("0")
    useEffect(async () => {
        let data = await contract.methods.bearRankPrice("6").call()
        data = Web3.utils.fromWei(data)
        setPrice(data)
    }, [price])


    const [percent, setPercent] = useState("100")
    useEffect(  () => {
        const currentPercent = Math.round((minted / total) * 100).toString()
        setPercent(currentPercent);
        console.log(percent)
    })


    return (
        <div className="tile-item tile-512 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="tile tile-middle tile-caption-include">
                <div className="tile-caption">
                    <figure className="icon icon-legendary">
                        <img src="https://www.bearz.tech/sites/all/themes/bootstrap/air/icons/air_glyph_051_legendary.svg"/>
                    </figure>
                    <h3 className="h4">Legendary</h3>
                    <div className="tile-title">
                        <div className="tile-price"><span>Price:</span> {price} BNB</div>
                        <p>The pride of the bear community. They are the true gods of war tempered in the volcano of
                            endless battles. Besides, they have the most beautiful equipment and the softest fur.</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>
                                <span className="sr-only">15% Complete</span>
                            </div>
                            <div className="progress-count">{minted}/{total}</div>
                        </div>
                    </div>
                    {minted === total ? <AllSold/> : <BuyFor price={price} rangID={"6"} />}
                </div>
            </div>
        </div>
    );
};

export default Bearz6;