import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {API_KEY, RPC_URL} from "../CONSTANT";

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
            {walletName: "metamask", preferred: true},
            {walletName: "trust", rpcUrl: RPC_URL, preferred: true},
            {walletName: "binance", preferred: true},
            {walletName: "walletConnect", rpc: {["56"]: RPC_URL}},
            {walletName: 'coinbase', preferred: true}
        ]
    }
});