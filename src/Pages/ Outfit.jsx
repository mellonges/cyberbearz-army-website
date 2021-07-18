import React from 'react';
import GenerateBearz from "../Component/MySquadComponents/GenerateBearz";


import Footer from "../Component/Footer/Footer";
import BackGroundSlick from "../Component/Slick/BackGroundSlick";






// import images end


const Outfit = () => {
    return (
        <>
        <div>
            <section
                className="section section-hero section-lg section-align-center section-lead section-bold section-theme-autoheight section-theme-transparent section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-28 section-i0">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Bear Outfit</p>
                                    <h1>Scarcity &amp; Properties.</h1>
                                    <p>The NFT CyberBearz Army consists of 7 layers. 5 layers are for all bears, they
                                        have different rarity levels. And 2 layers are ranked and depend on the military
                                        rank of a bear: a hat and an accessory. Unique items of the corresponding rank
                                        can drop in these layers.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-option">
                    <div className="container-fluid tile-wrapper tile-wrapper-md">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row tile-items">
                                    <div className="tile-item tile-464 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Hi!</p><p>My name
                                                is Barry! I am a private bear and today I'm going to show you all the
                                                gear items used by my brothers.</p>
                                                <figure className="barry barry-body-armor"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-674 tile-lg col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Rarity</h5>
                                                <p>Don't be upset if you didn't get a rare item, because even a private
                                                    bear with an interesting combination of ordinary layers becomes more
                                                    attractive from civilians' perspective.</p>
                                                <hr/><h5>Ranks</h5>
                                                    <p>A private cannot put on a general's cap, but there is a chance to
                                                        get elite gear available to the officer corps.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section section-lg section-align-center section-theme-autoheight section-theme-transparent section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-38 section-i1">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Background</p>
                                    <h3>Bears' motto is Always Ready!</h3>
                                    <p>Any bear is always ready to fight: at dawn, at noon, at dusk or even at night.
                                        They can fight on Titan, Mars or the Moon! They do not retreat when everything
                                        around is enveloped in flames, frozen with icy C-rays or covered with weapon
                                        smoke. They are able to conduct special operations in tropical jungles, deserts
                                        and even on the seabed.</p><p></p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid section-option">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="catalog-wrapper">
                                <BackGroundSlick />
                                {/*<ul className="catalog-items">*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img1}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Dawn</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img2}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Midday</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img3}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Sunset</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img4}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Evening</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img5}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Mars</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img6}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Titan</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img7}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Moon</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img8}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Bottom</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img9}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Smoke</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img10}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Fire</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img11}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*    </li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img12}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Night</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img13}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Sands</h5></li>*/}
                                {/*    <li className="catalog-item">*/}
                                {/*        <figure className="catalog-img"*/}
                                {/*                data-rjs="2" data-rjs-processed="true">*/}
                                {/*            <img className="h-i img-responsive"*/}
                                {/*                 src={img14}*/}
                                {/*                 data-rjs="2" alt="" title="" data-rjs-processed="true" width="212"*/}
                                {/*                 height="212" />*/}
                                {/*        </figure>*/}
                                {/*        <h5>Jungle</h5></li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <section
                className="section section-lg section-align-center section-theme-autoheight section-theme-transparent section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-36 section-i2">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Skin,
                                    Eyes &amp; Mouth</p><h3>Cute and fluffy.</h3>
                                    <p>Just look at their furry muzzles, they are natural-born killers. Hey you, show
                                        your war face! Oh yes sir, this is the most diverse army in the world.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-option container">
                    <div className="strip-wrapper row">
                        <div
                            className="col-lg-12 col-lg-offset-0 col-md-8 col-md-offset-2  col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="strip-items strip-center">
                                <div className="strip strip-sm">
                                    <div className="strip-caption"><h3 className="h5">Bear types</h3>
                                        <p>There are brown bears, polar bears, grizzlies, bears with dyed fur, zombie
                                            bears, and even cyborgs. I don't remember all of them.</p>

                                    </div>
                                </div>
                                <div className="strip strip-sm">
                                    <div className="strip-caption"><h3 className="h5">Eyes &amp; Mouth</h3>
                                        <p>It may seem to you, that all bears share the same muzzle, but we are
                                            different and have amazing facial expressions.</p>
                                    </div>
                                </div>
                                <div className="strip strip-sm">
                                    <div className="strip-caption"><h3 className="h5">Bad habits</h3>
                                        <p>All bears are smokers! A bear may not be smoking right now, but he will
                                            definitely light up a cigarette the next moment when you turn your back!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-option">
                    <div className="container-fluid tile-wrapper tile-wrapper-md">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row tile-items">
                                    <div className="tile-item tile-552 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Shadow</h5>
                                                <p>Sleeping &amp; Smile</p>
                                                <figure className="barry barry-shadow"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-642 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Polar</h5>
                                                <p>Veteran &amp; Kawaii</p>
                                                <figure className="barry barry-polar"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-643 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Brown</h5>
                                                <p>Old &amp; Fleer</p>
                                                <figure className="barry barry-brown"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-644 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Panda</h5>
                                                <p>Dead &amp; Annoyance</p>
                                                <figure className="barry barry-panda"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-645 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Kumamon</h5>
                                                <p>Normal &amp; Whistle</p>
                                                <figure className="barry barry-kumamon"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-646 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Winnie</h5>
                                                <p>White &amp; Aparthy</p>
                                                <figure className="barry barry-winnie"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-647 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Grizzly</h5>
                                                <p>Happy &amp; Smirk</p>
                                                <figure className="barry barry-grizzly"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-648 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Green</h5>
                                                <p>Stun &amp; Mustache</p>
                                                <figure className="barry barry-green"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-649 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Purple</h5>
                                                <p>Closed &amp; Pipe</p>
                                                <figure className="barry barry-purple"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-650 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Pink</h5>
                                                <p>Winking &amp; Cigar</p>
                                                <figure className="barry barry-pink"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-651 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Blue</h5>
                                                <p>Surprised &amp; Sigarette</p>
                                                <figure className="barry barry-blue"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-652 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Khaki</h5>
                                                <p>Spiteful &amp; Ciggy</p>
                                                <figure className="barry barry-khaki"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-653 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Red</h5>
                                                <p>Crying &amp; Wape Gold</p>
                                                <figure className="barry barry-red"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-654 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Himalayan</h5>
                                                <p>Yawny &amp; Wape Purple</p>
                                                <figure className="barry barry-himalayan"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-655 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Black</h5>
                                                <p>Focused &amp; Wape Green</p>
                                                <figure className="barry barry-black"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-656 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Cyborg</h5>
                                                <p>Open &amp; Wape Blue</p>
                                                <figure className="barry barry-cyborg"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-657 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Kodiak</h5>
                                                <figure className="barry barry-kodiak"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-658 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><h5>Zombie</h5>
                                                <figure className="barry barry-zombie"></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section section-lg section-align-center section-theme-autoheight section-theme-transparent section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-30 section-i3">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Wear</p>
                                    <h3>Clothing and unloading equipment.</h3>
                                    <p>According to statistics, 16% of bears prefer wearing no extra clothing. They say
                                        that they feel too hot. They are either tough guys or idiots.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-option">
                    <div className="container-fluid tile-wrapper tile-wrapper-md">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row tile-items">
                                    <div className="tile-item tile-638 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-middle tile-caption-include">
                                            <div className="tile-caption"><h4>Uniform</h4>
                                                <p>This is the basic outfit of a bear. The hi-tech zone layered clothing
                                                    is characterized by extra softness and comfortable compression.
                                                    There are three types of uniform: elite (black), military (khaki)
                                                    and police (blue). </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-515 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-right tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Uniform Elite</p>
                                                <p>The black color is perfect to intimidate foes and conduct night
                                                    raids. The special weave and composition of the fabric allow you to
                                                    move soundlessly.</p>
                                                <figure className="barry barry-uniform-elite"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-478 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Uniform
                                                Military</p><p>Natural colors are the most comforting tones for eyes,
                                                they make bears less noticeable in woodland areas.</p>
                                                <figure className="barry barry-uniform-military"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-637 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Uniform Police</p>
                                                <p>Bears wear bright blue uniforms when conducting urban military
                                                    operations not to shoot each other.</p>
                                                <figure className="barry barry-uniform-police"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-580 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Uniform Priest</p>
                                                <p>Chaplains fight side by side with their bear brothers singing hymns
                                                    and inspiring soldiers to do great things.</p>
                                                <figure className="barry barry-uniform-priest"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-516 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-right tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Military Gear</p>
                                                <p>It is designed to distribute the weight of ammunition, army or
                                                    technical equipment effectively.</p>
                                                <figure className="barry barry-military-gear"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-517 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Body Armor</p><p>I
                                                know that some smart guys prefer wearing no body armor because of its
                                                heavy weight, but bloody hell, sometimes it is the only thing that can
                                                save your ass.</p>
                                                <figure className="barry barry-body-armor"></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section section-lg section-align-center section-theme-autoheight section-theme-transparent section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-34 section-i4">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Hat</p>
                                    <h3>Helmets and gear.</h3>
                                    <p>Headgear is awarded depending on the rank of a bear. However, some bears, even
                                        generals, prefer simple accouterments of a private soldier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-option">
                    <div className="container-fluid tile-wrapper tile-wrapper-md">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row tile-items">
                                    <div className="tile-item tile-523 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-middle tile-left tile-caption-include">
                                            <div className="tile-caption"><h4>Helmet</h4>
                                                <p>There are helmets of three colors: khaki, black and blue. Some of
                                                    them have no decals, but there are helmets showing the rank of a
                                                    bear too.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-641 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Helmet Elite
                                                Recruit</p><p>This is a black helmet with a recruit's chevron. Perhaps,
                                                a future elite fighter is wearing it.</p>
                                                <figure className="barry barry-helmet-elite"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-579 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Helmet Military
                                                Private</p><p>This is my helmet. There are many of them, but this is
                                                mine. Do you see the chevron? This is the mark of a private.</p>
                                                <figure className="barry barry-helmet-military"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-639 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Helmet Elite
                                                Officer</p><p>Officers sometimes wear a helmet when they are in the line
                                                of fire. A blue helmet is for urban battles.</p>
                                                <figure className="barry barry-helmet-police"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-530 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Baseball Cap</p>
                                                <p>A lightweight small cap with a visor. It protects the eyes from too
                                                    bright sunlight.</p>
                                                <figure className="barry barry-cap-baseball"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-525 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Beret</p><p>Berets
                                                of a certain color are the distinctive mark and pride of special forces
                                                bears.</p>
                                                <figure className="barry barry-beret"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-527 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Hat</p><p>A
                                                standard headgear that fits comfortably on the head. The hat doesn't
                                                prevent air circulation and provides normal heat transfer. It is
                                                designed for demi-season wear.</p>
                                                <figure className="barry barry-hat"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-528 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Headset</p><p>This
                                                is the headgear of signalbears. Bears prefer fighting more, so there are
                                                a few such guys. But they operate helicopters, artillery, fire support
                                                and can order honey.</p>
                                                <figure className="barry barry-headset"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-531 tile-lg col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Mohawk</p><p>Bears
                                                do big, bright mohawks, painting them in different colors to demonstrate
                                                their strength and ruthlessness.</p>
                                                <figure className="barry barry-mohawk"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-529 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Bandaging</p>
                                                <p>Such bands are for wounded bears. However, not all bears wearing them
                                                    are wounded indeed.</p>
                                                <figure className="barry barry-bandaging"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-526 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Cap</p><p>Even
                                                Teddy bears understand very well who is standing in front of them if you
                                                are wearing this cap. Only generals can do this. I hope I will have the
                                                same one someday!</p>
                                                <figure className="barry barry-cap"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-532 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Ushanka</p><p>This
                                                item is awarded for special combat merits. Thus, it is a distinctive
                                                mark of veteran bears.</p>
                                                <figure className="barry barry-ushanka"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-533 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-middle tile-left tile-caption-include">
                                            <div className="tile-caption"><h4>Camouflage</h4>
                                                <p>An element of individual camouflage, designed for special operations,
                                                    espionage and disorientation of opponents.</p></div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-640 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-left tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Bunny Leather</p>
                                                <p>No, this is not a real bunny. It's me, Barry!</p>
                                                <figure className="barry barry-bunny"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-581 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Fox Leather</p>
                                                <p>A Fox Leather camouflage variation is also available.</p>
                                                <figure className="barry barry-fox"></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="section section-lg section-align-center section-theme-autoheight section-theme-transparent section-eyebrow-include section-theme-indent-bottom-inside-md  section-35 section-i5">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Accessory</p>
                                    <h3>Glasses and eye gear.</h3>
                                    <p>They are usually worn by experienced bears. But officers and specialists have
                                        some gear of a higher rank.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-option">
                    <div className="container-fluid tile-wrapper tile-wrapper-md">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row tile-items">
                                    <div className="tile-item tile-542 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Tactical
                                                Glasses</p><p>If you don't want to get a cybernetic eye, use these
                                                tactical glasses designed to protect you from shards.</p>
                                                <figure className="barry barry-tactical-glassses"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-543 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Aviator</p>
                                                <p>Initially, these glasses used to be available only to pilot bears,
                                                    but soon became popular among the entire officer corps.</p>
                                                <figure className="barry barry-aviator"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-544 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Wayfarer</p>
                                                <p>Lightweight carbon frames are comfortable to wear, and the laconic
                                                    design fits almost all muzzle types.</p>
                                                <figure className="barry barry-wayfarer"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-539 tile-sm col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">Cyber Eye</p>
                                                <p>Not worse than a real one, however, sometimes it is buggy. When
                                                    installing, you can select the laser color.</p>
                                                <figure className="barry barry-cybereye"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-541 tile-lg col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">NVG
                                                Elite &amp; Military</p><p>It is perfect for covert surveillance in the
                                                dark. Elites prefer black frames, although glowing lenses slightly
                                                reveal the presence of a bear.</p>
                                                <figure className="barry barry-nvg"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-545 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">FPV Drone
                                                Elite &amp; Military</p><p>First Person View glasses are designed to
                                                control drones and robots. A pilot sees the image received from video
                                                cameras of a machine in real-time. Drop bombs!</p>
                                                <figure className="barry barry-fpv"></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile-item tile-546 tile-md col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="tile tile-top tile-caption-include">
                                            <div className="tile-caption"><p className="tile-eyebrow">CyberEye
                                                Elite &amp; Military</p><p>Stylish frames, more colors, no bugs. This
                                                item has built-in night vision functions, an integrated sight and
                                                optical zoom.</p>
                                                <figure className="barry barry-cybereye-elite"></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GenerateBearz  />
            </section>
            <Footer />
        </div>

</>
);
};

export default Outfit;