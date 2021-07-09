import React from 'react';
import BearsTable from "../Component/Bears Table /BearsTable";
import Section from "../Component/Bears/Section";
import JqueryAccordion from "../Component/jqueryAccordion/JqueryAccordion";
import SimpleSlider from "../Component/Slick/Slick";
import ParallaxEffect from "../Component/Parallax/ParallaxEffect";

const MainPage = () => {
    return (
        <div>
            <ParallaxEffect />
            <BearsTable />
            <Section/>
            <JqueryAccordion />
            <SimpleSlider />
        </div>
    );
};

export default MainPage;