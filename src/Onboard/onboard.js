import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {API_KEY} from "../CONSTANT";

export let web3B
export const onboard = Onboard({
    dappId: API_KEY, // [String] The API key created by step one above
    darkMode: true,
    hideBranding: true,

    networkId: 56,  // [Integer] The Ethereum network ID your Dapp uses.
    subscriptions: {
        wallet: wallet => {
            web3B = new Web3(wallet.provider)
            console.log(wallet.name);
        }
    },
            walletSelect: {
                wallets: [
                    {walletName: "trust", rpcUrl: "https://bsc-dataseed1.binance.org"},
                    {walletName: "metamask"},
                    {walletName: "binance"},
                ]
            }
});