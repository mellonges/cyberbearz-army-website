import React from 'react';
import Bearz1 from "./Bearz1";
import Bearz2 from "./Bearz2";
import Bearz3 from "./Bearz3";
import Bearz4 from "./Bearz4";
import Bearz5 from "./Bearz5";
import Bearz6 from "./Bearz6";


const Section = () => {
    return (
        <section
            className="section section-lg section-align-center section-lead section-bold section-theme-autoheight section-theme-lighten section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-bottom-inside-lg-option
            section-theme-indent-no-bottom-outside  section-22 section-i1">
            <div className="container">
                <div className="row">
                    <div
                        className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                        <div className="section-content">
                            <div className="section-content-caption"><p className="section-eyebrow">War does not
                                change</p><h2>Набери себе армию.</h2>
                                <p>В CyberBearz Army служит 2 048 милых солдат медведей: рекруты, рядовые, офицеры,
                                    специалисты и генералы. Все должности ограничены и имеют свои индивидуальные
                                    привилегии на получение амуниции.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-option">
                <div className="container-fluid tile-wrapper tile-wrapper-md">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row tile-items">
                               <Bearz1 />
                               <Bearz2 />
                                <Bearz3 />
                                <Bearz4 />
                                <Bearz5 />
                                <Bearz6 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Section;