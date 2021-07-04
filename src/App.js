import React from "react";
import Section from "./Component/Bears/Section";
import NewAccordions from "./Component/Accordions/newAccordions";
import BearsTable from "./Component/Bears Table /BearsTable";
import Navbar from "./Component/Navbar/Navbar";
// import "./test3.css";
import SimpleSlider from "./Component/Slick/Slick";
import NewSlick from "./Component/Slick/NewSlick";
import Binanse from "./Component/Binanse";
import JqueryAccordion from "./Component/jqueryAccordion/JqueryAccordion";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BearsTable />
            <Section/>
            {/*<Binanse />*/}
            <JqueryAccordion />
            {/*ye, i think its :)*/}
            {/*<NewAccordions/>*/}
            <SimpleSlider />
            {/*<NewSlick />*/}
        </div>

    )
}

export default App;
