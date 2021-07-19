import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {chain} from "./ChainID";
const ethereum = window?.ethereum;
const Navbar = () => {

    const isConnected = ethereum?.isConnected()

    let [buttonText, setButtonText] = useState("Connect");
    const connectMetamask = async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        setButtonText("My Bearz");
        if (window.ethereum.chainId == "0x38") {
            console.log("Already connected to binance mainnet...")
            return
        }
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [chain],
        }).catch((error) => {
            console.log(error);
            // alert("An error has occurred. Please make sure the metamask is ready to go. See error in log");
        });
    }



    return (
        <>
            <header style={{fontFamily: "Common Pixel"}} id="navbar" role="banner"
                    className="navbar navbar-static-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink to="/">
                            <img className="navbar-brand pull-left"
                                 src={"https://www.bearz.tech/sites/default/files/navbar/brand/img/cyberbearzarmy_middle.svg"}
                                 alt="Главная"/>
                        </NavLink>
                        <button id="navbar-toggle" className="navbar-toggle" data-toggle="sidebar"
                                data-target=".sidebar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-collapse">
                        <nav style={{display: "flex", justifyContent: "center",}} role="navigation"
                             className="navbar-nav-wrapper">
                            <ul className="menu nav navbar-nav">

                                <li id="firstLeaf" className="first leaf"><NavLink  to="/outfit">Bear Outfit</NavLink>
                                </li>
                                <li className="leaf"><a href="https://twitter.com/cyberbearz" title="" className="nolink"
                                                        tabIndex="0">Twitter</a></li>
                                <li className="leaf"><a href="https://discord.gg/hxbtGfUy" title="" className="nolink"
                                                        tabIndex="0">Discord</a></li>
                                <li className="last leaf"><a href="https://www.instagram.com/cyberbearzz/" title="" className="nolink"
                                                             tabIndex="0">Instagram</a></li>
                            </ul>
                            <div className="navbar-text navbar-right">
                                {buttonText === "My Bearz" || isConnected ?
                                    <NavLink id="my-squad" className="btn btn-sm btn-default" to="/squade">My Squad</NavLink>
                                    : <button onClick={() => connectMetamask()} className="btn btn-sm btn-default">{buttonText}</button>
                                }
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;