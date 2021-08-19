import React, {useState} from 'react';
import logo from "../../BearsImg/cyberbearzarmy_middle .svg"
import {NavLink} from "react-router-dom";
import {onboard} from "../../Onboard/onboard";
const ethereum = window?.ethereum;
const Navbar = () => {

    // const isConnected = false
    // console.log(isConnected)

    let [buttonText, setButtonText] = useState("Connect");
    const connectMetamask = async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        setButtonText("My Bearz");
        if (window.ethereum.chainId == "0x38") {
            console.log("Already connected to binance mainnet...")
            return
        }


        const chain = {
            chainId: "0x38",
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
                name: "Binance Chain Native Token",
                symbol: "BNB",
                decimals: 18,
            },
            rpcUrls: ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "wss://bsc-ws-node.nariox.org"],
            blockExplorerUrls: ["https://www.bscscan.com/"],
            iconUrls: [
                "https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/550eda20-1b9a-4bc7-9a65-e4a329e8bb57.png"
            ]
        };
       await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [chain],
        }).catch((error) => {
            console.log(error);
            // alert("An error has occurred. Please make sure the metamask is ready to go. See error in log");
        });
    }
    const connectWallet = async () => {
        try {
            const walletSelectData = await onboard.walletSelect();
            console.log(`walletSelect: ${walletSelectData}`)
            const walletCheckData = await onboard.walletCheck();
            console.log(`walletCheck: ${walletCheckData}`)
            setButtonText("My Bearz");
        } catch (e) {
            console.log(e)
        }

    };





    return (
        <>
            <header style={{fontFamily: "Common Pixel"}} id="navbar" role="banner"
                    className="navbar navbar-static-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink to="/">
                            <img className="navbar-brand pull-left"
                                 src={logo}
                                 alt="Главная"/>
                        </NavLink>
                        <button id="navbar-toggle" className="navbar-toggle" data-toggle="sidebar"
                                data-target=".sidebar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon icon-bar"></span>
                        </button>
                    </div>

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
                                <div className="navbar-text navbar-right">
                                    <div className="navbar-collapse collapse" id="navbar-collapse">
                                        {buttonText === "My Bearz" ?
                                            <NavLink id="my-squad" className="btn btn-sm btn-default" to="/squade">My Squad</NavLink>
                                            : <button onClick={() => connectWallet()} className="btn btn-sm btn-default">{buttonText}</button>
                                        }
                                    </div>
                                </div>
                            </ul>
                        </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;