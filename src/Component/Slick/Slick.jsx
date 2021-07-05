import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function SimpleSlider() {
    const settings1 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase:'linear',
        speed: 7500,
        slidesToShow: 9,
        pauseOnHover: false,
        arrows: false
        // dots: true,
        // infinite: true,
        // slidesToShow: 8,
        // slidesToScroll: 0,




    };
    const settings2 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 5000,
        // dots: true,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 9,
        arrows: false


    };
    const settings3 = {
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        // arrows: false,
        speed: 2500,
        pauseOnHover: false,
        // dots: true,
        // accessibility: false,
        // infinite: true,
        slidesToShow: 9,
        arrows: false




    };
    return (
        <div>
            <Slider {...settings1}>
                <div>
                    <h3> <img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/1@2x.png"}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/2@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/3@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/4@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/5@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/6@2x.png"}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/7@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/8@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/9@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/10@2x.png"}/></h3>
                </div>
            </Slider>
            <Slider {...settings2}>
                <div>
                    <h3> <img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/11@2x.png"}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/12@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/13@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/14@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/15@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/12@2x.png"}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/17@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/1@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/19@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/21@2x.png"}/></h3>
                </div>
            </Slider>
            <Slider {...settings3}>
                <div>
                    <h3> <img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/22@2x.png"}/>
                    </h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/23@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/24@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/1@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/10@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/19@2x.png"}/></h3>
                </div>

                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/17@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/1@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/13@2x.png"}/></h3>
                </div>
                <div>
                    <h3><img style={{width: "90%", height: "90%", borderRadius: 16}} src={"https://www.bearz.tech/sites/default/files/styles/catalog_img_xs/public/img/catalog/xs/12@2x.png"}/></h3>
                </div>
            </Slider>
        </div>
    )
        }

