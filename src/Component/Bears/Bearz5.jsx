import React, {useEffect, useState} from 'react';
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../../CONSTANT";
import AllSold from "../Buttons/AllSold";
import BuyFor from "../Buttons/BuyFor";
import BuyBearz from "../Buttons/BuyBearz";

const webThree = new web3("https://bsc-dataseed1.binance.org");
const contract = new webThree.eth.Contract(CONTRACT_ABI, ADDRESS);
const Bearz5 = () => {
    const [total, setTotal] = useState("0")

    useEffect(async () => {
        const data = await contract.methods.amountTotal("5").call()
        setTotal(data)
    }, [total])


    const [minted, setMinted] = useState("0")
    useEffect(async () => {
        const data = await contract.methods.amountMinted("5").call()
        setMinted(data)
    }, [minted])


    const [price, setPrice] = useState("0")
    useEffect(async () => {
        let data = await contract.methods.bearRankPrice("5").call()
        data = webThree.utils.fromWei(data)
        setPrice(data)
    }, [price])

    const [percent, setPercent] = useState("100")
    useEffect(() => {
        const currentPercent = Math.round((minted / total) * 100).toString()
        setPercent(currentPercent);
    })

    return (
        <div>
            <div className="tile-item tile-511 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-caption-include">
                    <div className="tile-caption">
                        <figure className="icon icon-general">
                        </figure>
                        <h3 className="h4">Generals</h3>
                        <div className="tile-title">
                            <div className="tile-price"><span>Price:</span> {price} BNB</div>
                            <p>Experienced bears who have gone through hundreds of battles. They are well-versed in the
                                tactics and strategy of warfare. Bear power, experience, and deceit.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>
                                    <span className="sr-only">60% Complete</span>
                                </div>
                                <div className="progress-count">{minted}/{total}</div>
                            </div>
                        </div>
                        {minted === total ? <AllSold/> : <BuyBearz rangID={"5"} price={price} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bearz5;