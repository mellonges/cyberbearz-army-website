import React, {Component} from 'react';
import Slider from "react-slick";


import img4 from '../../BearsImg/1-4@2x.png'
import img2 from '../../BearsImg/1-2@2x.png'
import img6 from '../../BearsImg/1-6@2x.png'
import img7 from '../../BearsImg/1-7@2x.png'
import img8 from '../../BearsImg/1-8@2x.png'
import img9 from '../../BearsImg/1-9@2x.png'
import img10 from '../../BearsImg/1-10@2x.png'
import img11 from '../../BearsImg/1-11@2x.png'
import img12 from '../../BearsImg/1-12@2x.png'
import img13 from '../../BearsImg/1-13@2x.png'
import img14 from '../../BearsImg/1-14@2x.png'
import {responsiveValue} from "./Slick";


export default class BackGroundSlick extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 9,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            pauseOnHover: false,
            responsive: responsiveValue
        };
        return (

            <div>
                <Slider {...settings}>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img9} /> </h3>
                        <h5 style={{textAlign: "center"}}>Evening</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img2} /></h3>
                        <h5 style={{textAlign: "center"}}>Midday</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img13} /></h3>
                        <h5 style={{textAlign: "center"}}>Test</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img4} /></h3>
                        <h5 style={{textAlign: "center"}}>Evening</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img14} /></h3>
                        <h5 style={{textAlign: "center"}}>Green</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img6} /></h3>
                        <h5 style={{textAlign: "center"}}>Titan</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img7} /></h3>
                        <h5 style={{textAlign: "center"}}>Moon</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img8} /></h3>
                        <h5 style={{textAlign: "center"}}>Bottom</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img9} /></h3>
                        <h5 style={{textAlign: "center"}}>Smoke</h5>
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img10} /></h3>
                        {/*<h5 style={{textAlign: "center"}}>Evening</h5>*/}
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img11} /></h3>
                        {/*<h5 style={{textAlign: "center"}}>Evening</h5>*/}
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img12} /></h3>
                        {/*<h5 style={{textAlign: "center"}}>Evening</h5>*/}
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img13} /></h3>
                        {/*<h5 style={{textAlign: "center"}}>Evening</h5>*/}
                    </div>
                    <div>
                        <h3><img style={{width: "90%", height: "90%", borderRadius: "15%"}} src={img14} /></h3>
                        {/*<h5 style={{textAlign: "center"}}>Evening</h5>*/}
                    </div>
                </Slider>
            </div>
        );
    }
}
