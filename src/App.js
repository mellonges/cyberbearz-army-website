import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./Pages/mainPage";
import MySquad from "./Pages/MySquad";
import Navbar from "./Component/Navbar/Navbar";
import {LinearProgress} from "@material-ui/core";
import Outfit from "./Pages/ Outfit";

function App() {
    return (
        <React.Suspense fallback={<LinearProgress color="secondary"/>}>
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/squade" component={MySquad}/>
                    <Route exact path="/outfit" component={Outfit}/>
                </div>
            </BrowserRouter>
        </React.Suspense>


    );
}

export default App;
