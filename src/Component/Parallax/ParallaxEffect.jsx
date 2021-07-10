import React from 'react';
import {Parallax, ParallaxBanner} from "react-scroll-parallax";

const ParallaxEffect = () => {
    return (
        <div>
            <section
                className="section section-hero section-lg section-lg-long section-valign-top section-align-center section-lead section-bold section-theme-lighten section-theme-indent-no-bottom-outside section-map  section-1 section-i0">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption">
                                    <figure className="icon icon-bearz"></figure>
                                    <p className="h1">Generate a bear.</p>
                                    <h1 className="h4"><span className="h-p">CyberBearz </span>Invest in a unique NFT
                                        collection.</h1>
                                    <p>NFT collectibles with ranked ammunition drop chance on Binance Smart Chain.</p>
                                    <figure className="icon icon-bsc"></figure>
                                    {/*<Parallax y={[10, 30]} x={[-50, -0]}>*/}
                                        <figure  className="cards-top slide-in-top"></figure>
                                    {/*</Parallax>*/}
                                    {/*<Parallax disabled={true}>*/}
                                        <figure className="cards-bottom "></figure>
                                    {/*</Parallax>*/}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ParallaxEffect;