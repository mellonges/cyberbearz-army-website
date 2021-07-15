import React from 'react';
import BearsTable from "../Component/Bears Table /BearsTable";
import Section from "../Component/Bears/Section";
import JqueryAccordion from "../Component/jqueryAccordion/JqueryAccordion";
import SimpleSlider from "../Component/Slick/Slick";
import ParallaxEffect from "../Component/Parallax/ParallaxEffect";
import Complete from "../Component/60%Complete/Comlete";
import Meanwhile from "../Component/Meanwhile/Meanwhile";
import Community from "../Component/Community/Community";

const MainPage = () => {
    return (
        <div>
            <ParallaxEffect />
            <Section/>
            <Complete />
            <BearsTable />
            <JqueryAccordion />
            <SimpleSlider />
            <Meanwhile />
            <Community />
        </div>
    );
};

export default MainPage;