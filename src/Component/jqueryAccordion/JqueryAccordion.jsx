import React from 'react';


const JqueryAccordion = () => {
    return (
        <div>
            <section id="cover"
                className="section section-lg section-lead section-bold section-theme-autoheight section-theme-transparent section-theme-indent-no-top-inside section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-21">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Platform</p>
                                    <h2>Binance Smart Chain.</h2>
                                    <p>By purchasing the bears developed on the BEP-20 standard smart contract, you
                                        contribute to the further evolution of Binance Smart Chain (BSC), that is a
                                        modern, faster, and cheaper blockchain.</p>

                                    <p><a
                                        href="https://academy.binance.com/en/articles/an-introduction-to-binance-smart-chain-bsc"
                                        className="link link-up" target="_blank">Read more details</a></p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-option">
                    <div className="row stock-wrapper">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="stock stock-495">
                                <a className="stock-title collapsed" data-toggle="collapse" href="#stock-495s"
                                   aria-expanded="false" aria-controls="stock-495s">Low fees and high speed<span
                                    className="icon icon-cross"></span></a>
                                <div className="collapse" id="stock-495s">
                                    <div className="stock-caption"><p>Binance Smart Chain provides a minimum fee for
                                        buying 1 gwei that is 10^(-9) or 0.000000001 BNB. Visit <a
                                            href="https://bscscan.com/chart/gasprice" target="_blank">Binance Gas
                                            Tracker</a> to
                                        check out the current gas price.</p>
                                        <p>A small interval between blocks makes the processing of transactions faster.
                                            It takes only about 3 seconds. A higher gas limit compared to Ethereum also
                                            has a positive effect on throughput, allowing more transactions to be
                                            included in blocks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="stock stock-496">
                                <a className="stock-title collapsed" data-toggle="collapse" href="#stock-496s"
                                   aria-expanded="false" aria-controls="stock-496s">How to purchase and store <span
                                    className="icon icon-cross"></span></a>
                                <div className="collapse" id="stock-496s">
                                    <div className="stock-caption"><p>BNB coin is used for purchase.</p>
                                        <p>Metamask cryptocurrency wallets (<a
                                            href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                                            target="_blank">MetaMask connection to the Binance Smart Chain</a>) are used to purchase and store NFT CyberBearz Army.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="stock stock-497">
                                <a className="stock-title collapsed" data-toggle="collapse" href="#stock-497s"
                                   aria-expanded="false" aria-controls="stock-497s">Trade and exchange <span
                                    className="icon icon-cross"></span></a>
                                <div className="collapse" id="stock-497s">
                                    <div className="stock-caption"><p>You can always present or exchange your bear
                                        directly through cryptocurrency wallets or your personal account.</p>
                                        <p>Later, you can list your NFTs for sale, either through this website or an
                                            affiliate marketplace.</p></div>
                                </div>
                            </div>
                            <div className="stock stock-513">
                                <a className="stock-title collapsed" data-toggle="collapse" href="#stock-513s"
                                   aria-expanded="false" aria-controls="stock-513s">Smart Contract<span
                                    className="icon icon-cross"></span></a>
                                <div className="collapse" id="stock-513s">
                                    <div className="stock-caption"><p>The CyberBearz Army is created based on the
                                        Binance Smart Chain smart contract. You can check the smart contract
                                        authentication  <a href="#" target="_blank">here</a>.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default JqueryAccordion;