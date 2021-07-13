import React, {useEffect, useState} from 'react';
import GetFree from "../Buttons/GetFree";
import web3 from "web3";
import {ADDRESS, CONTRACT_ABI} from "../../CONSTANT";
import AllSold from "../Buttons/AllSold";
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

    const [percent, setPercent] = useState("100")
    useEffect(  () => {
        const currentPercent = Math.round((minted / total) * 100).toString()
        console.log(`bearz1 ${currentPercent} | ${minted} | ${total}`);
        setPercent(currentPercent);
    })

    return (
        <div>
            <div className="tile-item tile-409 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-top tile-left tile-caption-include">
                    <div className="tile-caption">
                        <figure className="icon icon-recruits"><img
                            src="https://www.bearz.tech/sites/all/themes/bootstrap/air/icons/air_glyph_047_recruits.svg"/>
                        </figure>
                        <h3 className="h4">Recruits</h3>
                        <div className="tile-title">
                            <div className="tile-price"><span>Price:</span> FREE! (0 BNB)</div>
                            <p>They are called Teddy bears in this army. They have no skills yet, but adore fighting. To
                                gain the respect of their more experienced fellows, they still have to prove themselves
                                in battle and go through the initiation ceremony.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="60" style={{width: `${percent}%`}}>
                                    <span className="sr-only">10% Complete</span>
                                </div>
                                <div className="progress-count">{minted}/{total}</div>
                            </div>
                        </div>
                        {minted === total ? <AllSold/> : <GetFree/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bearz1;