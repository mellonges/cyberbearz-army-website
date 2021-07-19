import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import images
// first column
import img1 from '../../BearsImg/1/14.png'
import img2 from '../../BearsImg/1/9.png'
import img3 from '../../BearsImg/1/43.png'
import img4 from '../../BearsImg/1/48.png'
import img5 from '../../BearsImg/1/50.png'
import img6 from '../../BearsImg/1/61.png'
import img7 from '../../BearsImg/1/84.png'
import img8 from '../../BearsImg/1/89.png'
import img9 from '../../BearsImg/1/93.png'
import img10 from '../../BearsImg/1/94.png'
// second column
import img11 from '../../BearsImg/2/182.png'
import img12 from '../../BearsImg/2/183.png'
import img13 from '../../BearsImg/2/185.png'
import img14 from '../../BearsImg/2/186.png'
import img15 from '../../BearsImg/2/212.png'
import img16 from '../../BearsImg/2/214.png'
import img17 from '../../BearsImg/2/215.png'
import img18 from '../../BearsImg/2/222.png'
import img19 from '../../BearsImg/2/224.png'
import img20 from '../../BearsImg/2/238.png'
// third column
import img21 from '../../BearsImg/3/431.png'
import img22 from '../../BearsImg/3/446.png'
import img23 from '../../BearsImg/3/453.png'
import img24 from '../../BearsImg/3/503.png'
import img25 from '../../BearsImg/3/518.png'
import img26 from '../../BearsImg/3/549.png'
import img27 from '../../BearsImg/3/590.png'
import img28 from '../../BearsImg/3/644.png'
import img29 from '../../BearsImg/3/701.png'
import img30 from '../../BearsImg/3/741.png'
// import images end





export const responsiveValue = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            // slidesToScroll: 2,
            // initialSlide: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            // slidesToScroll: 1
        }
    }
]

export default function Slick() {
    const settings1 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase:'linear',
        speed: 7500,
        pauseOnHover: false,
        slidesToShow: 9,
        // pauseOnHover: false,
        arrows: false,
        responsive: responsiveValue
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
        slidesToShow: 9,
        arrows: false,
        responsive: responsiveValue
        // variableWidth: true,
        // adaptiveHeight: true,

    };
    const settings3 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 7500,
        pauseOnHover: false,
        slidesToShow: 9,
        arrows: false,
        responsive: responsiveValue
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
                    <img style={{width: "200e,", height: "200px", borderRadius: "16%"}} src={img1}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img2}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img3}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img4}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img5}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img6}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img7}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img8}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img9}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img10}/></h3>
                </div>
            </Slider>
            <Slider {...settings2}>
                <div>
                    <h3> <img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img11}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img12}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img13}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img14}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img15}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img16}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img17}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img18}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img19}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img20}/></h3>
                </div>
            </Slider>
            <Slider {...settings3}>
                <div>
                    <h3> <img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img21}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img22}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img23}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img24}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img25}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img26}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img27}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img28}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img29}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "200px", height: "200px", borderRadius: "16%"}} src={img30}/></h3>
                </div>
            </Slider>
        </div>
    )
        }

