import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import images
import img1 from '../../BearsImg/1@2x.png'
import img2 from '../../BearsImg/2@2x.png'
import img3 from '../../BearsImg/3@2x.png'
import img4 from '../../BearsImg/4@2x.png'
import img5 from '../../BearsImg/5@2x.png'
import img6 from '../../BearsImg/6@2x.png'
import img7 from '../../BearsImg/7@2x.png'
import img8 from '../../BearsImg/8@2x.png'
import img9 from '../../BearsImg/9@2x.png'
import img10 from '../../BearsImg/10@2x.png'
import img11 from '../../BearsImg/11@2x.png'
import img12 from '../../BearsImg/12@2x.png'
import img13 from '../../BearsImg/13@2x.png'
import img14 from '../../BearsImg/14@2x.png'
import img15 from '../../BearsImg/15@2x.png'
import img17 from '../../BearsImg/17@2x.png'
import img19 from '../../BearsImg/19@2x.png'
import img20 from '../../BearsImg/20@2x.png'
import img21 from '../../BearsImg/21@2x.png'
import img22 from '../../BearsImg/22@2x.png'
import img23 from '../../BearsImg/23@2x.png'
import img24 from '../../BearsImg/24@2x.png'





// import images end


export default function Slick() {
    const settings1 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase:'linear',
        speed: 7500,
        pauseOnHover: false,
        slidesToShow: 5,
        // pauseOnHover: false,
        arrows: false,
        // variableWidth: true,
        // adaptiveHeight: true




    };
    const settings2 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 5000,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        // variableWidth: true,
        // adaptiveHeight: true,

    };
    const settings3 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 7500,
        pauseOnHover: false,
        slidesToShow: 5,
        arrows: false,
        // variableWidth: true,
        // adaptiveHeight: true




    };
    return (
        <div>
            <section
                className="section section-align-center section-lead section-bold section-theme-autoheight section-theme-darken section-eyebrow-include section-theme-indent-bottom-inside-md section-theme-indent-no-bottom-outside  section-33 section-i5">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-content-wrapper col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="section-content">
                                <div className="section-content-caption"><p className="section-eyebrow">Possible
                                    options</p><h2>What kind of bears are there?</h2>
                                    <p>Here you can find examples of bears that can be generated randomly.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Slider {...settings1}>
                <div>
                    <h3>
                    <img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img1}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img2}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img2}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img3}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img4}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img5}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img6}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img7}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img8}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img9}/></h3>
                </div>
            </Slider>
            <Slider {...settings2}>
                <div>
                    <h3> <img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img10}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img11}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img12}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img13}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img14}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img15}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img12}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img17}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img19}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img20}/></h3>
                </div>
            </Slider>
            <Slider {...settings3}>
                <div>
                    <h3> <img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img21}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img22}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img23}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img24}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img15}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img14}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img13}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img12}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img11}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "70%", height: "50%", borderRadius: "16%"}} src={img10}/></h3>
                </div>
            </Slider>
        </div>
    )
        }

