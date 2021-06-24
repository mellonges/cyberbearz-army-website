import {Container} from "@material-ui/core";
import SimpleAccordion from "./Component/Platform/Accordions/accordions";
import Section from "./Component/Platform/Accordions/Section";
import NewAccordions from "./Component/Platform/Accordions/newAccordions";


function App() {
    return (
        <div className="App">
            <Section />
            {/*<SimpleAccordion>*/}
            <NewAccordions />


        </div>
    );

}

export default App;
