import React from 'react';
import GetFree from "../Buttons/GetFree";
import AllSold from "../Buttons/AllSold";
import BuyFor from "../Buttons/BuyFor";

const Section = () => {
    return (
        <section
            className="section section-lg section-align-center section-lead section-bold section-theme-autoheight section-theme-lighten section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-bottom-inside-lg-option section-theme-indent-no-bottom-outside  section-22 section-i1">
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
                                <div className="tile-item tile-409 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="tile tile-top tile-left tile-caption-include">
                                        <div className="tile-caption">
                                            <figure className="icon icon-recruits"></figure>
                                            <h3 className="h4">Recruits</h3>
                                            <div className="tile-title">
                                                <div className="tile-price"><span>Price:</span> FREE! (0 BNB)</div>
                                                <p>В армии их называют Teddy bear. Ничего не умеют, но очень любят
                                                    драться. Чтобы получить уважение старших товарищей, им ещё предстоит
                                                    проявить себя в бою и пройти обряд инициации.</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                         aria-valuemin="0" aria-valuemax="60" style={{width: "1%"}}>
                                                        <span className="sr-only">10% Complete</span>
                                                    </div>
                                                    <div className="progress-count">0/0{}</div>
                                                </div>

                                            </div>
                                            <GetFree />
                                        </div>
                                    </div>
                                </div>
                                <div className="tile-item tile-508 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="tile tile-middle tile-caption-include">
                                        <div className="tile-caption">
                                            <figure className="icon icon-privates"></figure>
                                            <h3 className="h4">Privates</h3>
                                            <div className="tile-title">
                                                <div className="tile-price"><span>Price:</span> 0 BNB</div>
                                                <p>Опытные бойцы на чьих пушистых плечах держится вся мощь медвежьей
                                                    армии. Коренастые, обладают мощным телом с маленьким хвостом. Любят
                                                    мёд, карты и хорошую драку.</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                         aria-valuemin="0" aria-valuemax="100" style={{width: "1%"}}>
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                    <div className="progress-count">0/0 {}</div>
                                                </div>

                                            </div>
                                            <AllSold />
                                        </div>
                                    </div>
                                </div>
                                <div className="tile-item tile-509 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="tile tile-middle tile-caption-include">
                                        <div className="tile-caption">
                                            <figure className="icon icon-officers"></figure>
                                            <h3 className="h4">Officers</h3>
                                            <div className="tile-title">
                                                <div className="tile-price"><span>Price:</span> 0 BNB</div>
                                                <p>Суровые медведи ведущие в бой своих братьев. Получают усиленный паёк
                                                    и без промедления способны подтвердить свой авторитет ударом
                                                    волосатой лапы.</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                         aria-valuemin="0" aria-valuemax="100" style={{width: "1%"}}>
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                    <div className="progress-count">0/0 {}</div>
                                                </div>

                                            </div>

                                            <BuyFor price={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="tile-item tile-510 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="tile tile-middle tile-caption-include">
                                        <div className="tile-caption">
                                            <figure className="icon icon-elite"></figure>
                                            <h3 className="h4">Elite</h3>
                                            <div className="tile-title">
                                                <div className="tile-price"><span>Price:</span> 0 BNB</div>
                                                <p>Медведи обладающие специальными навыками проведения специальных
                                                    операций: диверсии, шпионаж, штурмовые операции. Берегите свой
                                                    Мёд!</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                         aria-valuemin="0" aria-valuemax="100" style={{width: "1%"}}>
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                    <div className="progress-count">0/0 {}</div>
                                                </div>

                                            </div>
                                            <BuyFor />
                                        </div>
                                    </div>
                                </div>
                                <div className="tile-item tile-511 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="tile tile-middle tile-caption-include">
                                        <div className="tile-caption">
                                            <figure className="icon icon-generals"></figure>
                                            <h3 className="h4">Generals</h3>
                                            <div className="tile-title">
                                                <div className="tile-price"><span>Price:</span> 0 BNB</div>
                                                <p>Старые медведи прошедшие сотни сражений. Отлично разбираются в
                                                    тактике и стратегии ведения боевых действий. Медвежья сила,
                                                    помноженная на коварство.</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                         aria-valuemin="0" aria-valuemax="100" style={{width: "1%"}}>
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                    <div className="progress-count">0/0 {}</div>
                                                </div>

                                            </div>
                                            <AllSold />
                                        </div>
                                    </div>
                                </div>
                                <div className="tile-item tile-512 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="tile tile-middle tile-caption-include">
                                        <div className="tile-caption">
                                            <figure className="icon icon-legendary"></figure>
                                            <h3 className="h4">Legendary</h3>
                                            <div className="tile-title">
                                                <div className="tile-price"><span>Price:</span> 0 BNB</div>
                                                <p>Гордость медвежьего общества. Настоящие боги войны, закалённые в
                                                    горниле бесконечных сражений. А ещё у них красивое снаряжение и
                                                    самая мягкая шерсть.</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                         aria-valuemin="0" aria-valuemax="100" style={{width: "1%"}}>
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                    <div className="progress-count">0/0</div>
                                                </div>

                                            </div>
                                            <BuyFor price={""} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};

export default Section;