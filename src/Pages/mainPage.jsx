import React from 'react';
import BearsTable from "../Component/Bears Table /BearsTable";
import Section from "../Component/Bears/Section";
import JqueryAccordion from "../Component/jqueryAccordion/JqueryAccordion";
import ParallaxEffect from "../Component/Parallax/ParallaxEffect";
import Complete from "../Component/60Complete/Comlete";
import Meanwhile from "../Component/Meanwhile/Meanwhile";
import Community from "../Component/Community/Community";
import FooterWithComments from "../Component/Footer/FooterWithComments";
import Slick from "../Component/Slick/Slick";
import Marketplaces from "../Component/Marketplaces/Marketplaces";

const MainPage = () => {
    return (
        <div>
            <ParallaxEffect />
            <Section/>
            <Marketplaces />
            <Complete />
            <BearsTable />
            <JqueryAccordion />
            <Slick />
            <Meanwhile />
            <Community />
            <FooterWithComments />
        </div>
    );
};

export default MainPage;