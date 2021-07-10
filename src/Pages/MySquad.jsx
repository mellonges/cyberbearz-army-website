import React, {useEffect} from 'react';
import {ADDRESS, CONTRACT_ABI} from "../Component/Bears/CONSTANT";
import web3 from "web3";
const Web3 = new web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const contract = new Web3.eth.Contract(CONTRACT_ABI, ADDRESS);
const ethereum = window.ethereum;

const MySquad =  () => {


    useEffect(async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        const data = await contract.methods.getBearzOfOwner(account).call();
        console.log(data)

    })

    return (
        <>
            <section id="block-views-section-section" className="block block-views clearfix">
                <section
                    className="section section-hero section-lg section-theme-transparent section-theme-indent-top-outside-sm  section-42 section-i0">
                    <div className="section-option">
                        <div className="container-fluid tile-wrapper tile-wrapper-md">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row tile-items">
                                        <div
                                            className="tile-item tile-631 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="tile tile-middle tile-center tile-caption-include">
                                                <div className="tile-caption"><h1 className="h4">Son, there is not a
                                                    single bear in your squad!</h1>
                                                    <p><button className="btn btn-primary">Generate
                                                        a bear</button></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="tile-item tile-633 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
                                        {/*<div className="tile tile-middle tile-left tile-caption-include">*/}
                                        {/*<div className="tile-caption">*/}
                                        {/*<figure className="bear"></figure>*/}
                                        {/*<div className="tile-token">*/}
                                        {/*    <h2 className="h5">CyberBear Army #1265</h2>*/}
                                        {/*    <span className="label label-default">General</span><span*/}
                                        {/*    className="label label-default">Mars</span><span*/}
                                        {/*    className="label label-default">Khaki</span><span*/}
                                        {/*    className="label label-default">Winking</span><span*/}
                                        {/*    className="label label-default">Body Armor Green</span><span*/}
                                        {/*    className="label label-default">Ciggy</span>*/}
                                        {/*    <p><button*/}
                                        {/*          className="btn btn-default" data-toggle="modal"*/}
                                        {/*          data-target="#myModal">Send the bear</button></p>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="tile-item tile-634 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
                                        {/*    <div className="tile tile-middle tile-left tile-caption-include">*/}
                                        {/*        <div className="tile-caption">*/}
                                        {/*            <figure className="bear bear-2"></figure>*/}
                                        {/*            <div className="tile-token">*/}
                                        {/*                <h2 className="h5">CyberBear Army #36</h2>*/}
                                        {/*                <span className="label label-default">Officer</span><span*/}
                                        {/*                className="label label-default">Midday</span><span*/}
                                        {/*                className="label label-default">Brown</span><span*/}
                                        {/*                className="label label-default">Default</span><span*/}
                                        {/*                className="label label-default">Uniform Police + Armor Khaki</span><span*/}
                                        {/*                className="label label-default">Beret Military Officer</span><span*/}
                                        {/*                className="label label-default">Whistle</span><span*/}
                                        {/*                className="label label-default">NVG Elite Gold</span>*/}
                                        {/*                <p><button*/}
                                        {/*                      className="btn btn-default" data-toggle="modal"*/}
                                        {/*                      data-target="#myModal">Send the bear</button></p>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


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
                                 src="https://www.bearz.tech/sites/all/themes/bootstrap/air/img/bear.png"/>
                            <h6>text</h6>
                            <input style={{marginTop: "5%"}} type="text"
                                   className="form-control"
                                   placeholder="To address"/>
                            <button style={{marginLeft: "80%"}} type="button" className="btn btn-default">Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MySquad;