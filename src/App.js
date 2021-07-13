import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./Pages/mainPage";
import MySquad from "./Pages/MySquad";
import Navbar from "./Component/Navbar/Navbar";
import {LinearProgress} from "@material-ui/core";
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <React.Suspense fallback={<LinearProgress  color="secondary" />}>
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/squade" component={MySquad}/>
                <Footer />
            </div>
        </BrowserRouter>
        </React.Suspense>


    );
}

export default App;
