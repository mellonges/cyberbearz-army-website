import React, {useState} from 'react';
import {Link} from "@material-ui/core";

const ethereum = window.ethereum;
const Navbar = () => {

    let [buttonText, setButtonText] = useState("Connect wallet");
    const connectMetamask = async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        await setButtonText(buttonText = "My Bearz");
    }



    // if (window.ethereum.chainId == "0x1") {
    //     console.log("Already connected to ethereum mainnet...")
    //     return
    // }
    //
    // const chain = {
    //     chainId: "0x1",
    //     chainName: "Ethereum Mainnet",
    //     nativeCurrency: {
    //         name: "Ethereum",
    //         symbol: "ETH",
    //         decimals: 18,
    //     },
    //     rpcUrls: ["https://mainnet.infura.io/v3/89e3e92182814809b0854f599359f19d"],
    //     blockExplorerUrls: ["https://etherscan.io/"],
    // };
    // window.ethereum.request({
    //     method: "wallet_addEthereumChain",
    //     params: [chain],
    // }).catch((error) => {
    //     console.log(error);
    //     // alert("An error has occurred. Please make sure the metamask is ready to go. See error in log");






        return (
        <>
            <header style={{fontFamily: "Common Pixel"}} id="navbar" role="banner" className="navbar navbar-static-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <img className="navbar-brand pull-left"  src={"https://www.bearz.tech/sites/default/files/navbar/brand/img/cyberbearzarmy_middle.svg"} alt="Главная" />
                        <button id="navbar-toggle" className="navbar-toggle" data-toggle="sidebar"
                                data-target=".sidebar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon icon-bar"></span>
                        </button>
                    </div>
                    <div  className="navbar-collapse collapse" id="navbar-collapse">
                        <nav  style={{display: "flex", justifyContent: "center",}} role="navigation" className="navbar-nav-wrapper">
                            <ul className="menu nav navbar-nav">

                                <li className="first leaf"><a href="https://www.bearz.tech/faq" title="">Bear Outfit</a>
                                </li>
                                <li className="leaf"><a href="https://www.bearz.tech/#" title="" className="nolink"
                                                        tabIndex="0">Twitter</a></li>
                                <li className="leaf"><a href="https://www.bearz.tech/#" title="" className="nolink"
                                                        tabIndex="0">Discord</a></li>
                                <li className="last leaf"><a href="https://www.bearz.tech/#" title="" className="nolink"
                                                             tabIndex="0">Instagram</a></li>
                            </ul>
                            <div className="navbar-text navbar-right">
                                <button onClick={() => connectMetamask()}
                                        className="btn btn-sm btn-default">{buttonText}
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;