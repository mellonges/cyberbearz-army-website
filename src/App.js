import React from "react";
import Section from "./Component/Bears/Section";
import NewAccordions from "./Component/Accordions/newAccordions";
import BearsTable from "./Component/Bears Table /BearsTable";


function App() {
    return (
        <div className="App">
            <BearsTable />
            <Section/>
            <NewAccordions/>
        </div>
    )
}

export default App;
