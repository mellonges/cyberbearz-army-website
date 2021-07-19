Cryptopunks = { PunkState: {} };
const listCryptopunks = [9111, 5066, 2988, 9818, 2138, 2838, 1496, 3503, 4721, 7865]
const netURL = "https://bsc-dataseed4.binance.org/";
const contractAddress = "0x328ab92Cc2CF91fd9601049E91cEF34745784E77";

const initCryptopunkSold = async () => {
    for (let val of listCryptopunks) {
        let cryptopunkCheck = async (value) => {
            let sold = await Cryptopunks.punkContract.methods.tokenSold(value.toString()).call();

            if (sold) {
                document.getElementById("availableBuyCryptopunk" + value.toString()).style.display = 'none';
                document.getElementById("soldCryptopunk" + value.toString()).style.display = 'block';
            } else {
                document.getElementById("availableBuyCryptopunk" + value.toString()).style.display = 'block';
                document.getElementById("soldCryptopunk" + value.toString()).style.display = 'none';
            }
        }
        cryptopunkCheck(val);
    }
}

Cryptopunks.buyCryptopunk = function (tokenId, price) {
    console.log(Cryptopunks.PunkState.account)
    Cryptopunks.punkContract.defaultAccount = Cryptopunks.PunkState.account
    // Cryptopunks.punkContract.methods.buyCryptopunk(tokenId).send({ gas: 200000, value: price, from: Cryptopunks.PunkState.account, to: contractAddress });

    console.log(Cryptopunks.PunkState.account)
    Cryptopunks.punkContract.defaultAccount = Cryptopunks.PunkState.account
    let buyCryptopunkABI = Cryptopunks.punkContract.methods.buyCryptopunk(tokenId).encodeABI();
    // let buyCryptopunkABISigned = Cryptopunks.PunkState.provider.eth.sign(buyCryptopunkABI, Cryptopunks.PunkState.account)
    // Cryptopunks.PunkState.provider.eth.sendTransaction({ from: Cryptopunks.PunkState.account, to: contractAddress, value: price, data: buyCryptopunkABISigned })
    console.log(price)
    const tx = {
        from: Cryptopunks.PunkState.account,
        to: contractAddress,
        data: buyCryptopunkABI,
        value: web3.utils.numberToHex(price),
        gasPrice: web3.utils.numberToHex("20000000000"),
        gas: web3.utils.numberToHex("200000")
      };
    const txHash1 = window.ethereum.request({
        method: "eth_sendTransaction",
        params: [tx]
    });
    // let txHash1 = Cryptopunks.PunkState.provider.eth.call(tx);
    console.log("txHash", txHash1);
};

const initConnectButton = () => {
    console.log('Initializing connect button...');
    document.getElementById("buttonInstallMetamask").style.display = 'none';
    document.getElementById("buttonConnectMetamask").style.display = 'block';
    document.getElementById("textWalletIsConnected").style.display = 'none';
};

const initConnectedMetamask = () => {
    console.log('Initializing connected button...');
    document.getElementById("buttonInstallMetamask").style.display = 'none';
    document.getElementById("buttonConnectMetamask").style.display = 'none';
    document.getElementById("textWalletIsConnected").style.display = 'block';
};

const initInstallMetamaskButton = () => {
    console.log('Initializing install button...');
    document.getElementById("buttonInstallMetamask").style.display = 'block';
    document.getElementById("buttonConnectMetamask").style.display = 'none';
    document.getElementById("textWalletIsConnected").style.display = 'none';
};

const initPayButton = async () => {
    document.getElementById("buttonInstallMetamask").style.display = 'none';
    document.getElementById("buttonConnectMetamask").style.display = 'none';
    document.getElementById("textWalletIsConnected").style.display = 'block';

    for (let val of listCryptopunks) {
        let cryptopunkCheck = async (value) => {
            let sold = await Cryptopunks.punkContract.methods.tokenSold(value.toString()).call();

            if (sold) {
                document.getElementById("availableBuyCryptopunk" + value.toString()).style.display = 'none';
                document.getElementById("soldCryptopunk" + value.toString()).style.display = 'block';
                document.getElementById("buttonBuyCryptopunk" + value.toString()).style.display = 'none';
            } else {
                document.getElementById("availableBuyCryptopunk" + value.toString()).style.display = 'block';
                document.getElementById("soldCryptopunk" + value.toString()).style.display = 'none';
                document.getElementById("buttonBuyCryptopunk" + value.toString()).style.display = 'block';
            }
        }
        cryptopunkCheck(val);
    }
};

Cryptopunks.getContract = async () => {
    const data = await $.getJSON("static/contracts/CryptoPunksMarket.json");
    Cryptopunks.punkContract = new Cryptopunks.PunkState.provider.eth.Contract(data.abi, contractAddress);
};


Cryptopunks.checkWeb3 = async () => {
    var width = $(window).width();
    // Modern dapp browsers...
    if (window.ethereum) {
        Cryptopunks.PunkState.provider = new Web3(new Web3.providers.HttpProvider(netURL));
        window.web3 = Cryptopunks.PunkState.provider;
        initConnectButton();
        console.log("Found window.ethereum, please, connect metamask...");
    }
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    else if (typeof web3 !== 'undefined') {
        console.log("Provider is connected...")
        Cryptopunks.PunkState.provider = new Web3(window.web3.currentProvider);
        window.web3 = Cryptopunks.PunkState.provider;
        window.web3.eth.getAccounts(function (err, accounts) {
            // console.log(accounts);
            if (accounts[0] !== Cryptopunks.PunkState.account) {
                console.log("Metamask account changed: " + accounts[0]);
                Cryptopunks.PunkState.account = accounts[0];
                window.web3.eth.defaultAccount = accounts[0];
                Cryptopunks.PunkState.provider.eth.defaultAccount = accounts[0];
                Cryptopunks.punkContract.defaultAccount = accounts[0];
                if (Cryptopunks.PunkState.account === undefined) {
                    Cryptopunks.PunkState.accountUnlocked = false;
                } else {
                    Cryptopunks.PunkState.accountUnlocked = true;
                }
            }
            Cryptopunks.PunkState.accountQueried = true;
        });
        initConnectedMetamask();
        initPayButton();
        Cryptopunks.connectToMainnetBSC();
        Cryptopunks.getContract();
    } else {
        console.log("No web3 present.");
        Cryptopunks.PunkState.provider = new Web3(new Web3.providers.HttpProvider(netURL));
        window.web3 = Cryptopunks.PunkState.provider;
        Cryptopunks.PunkState.web3NotPresent = true;
    }
    Cryptopunks.PunkState.web3Queried = true;
}

Cryptopunks.connectToMainnetBSC = async () => {
    if (typeof window.ethereum == 'undefined') {
        initInstallMetamaskButton();
    } else {
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
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [chain],
        }).catch((error) => {
            console.log(error);
            // alert("An error has occurred. Please make sure the metamask is ready to go. See error in log");
        });
        window.location.reload();
    }
}

Cryptopunks.connectToTestnetBSC = async () => {
    if (typeof window.ethereum == 'undefined') {
        initInstallMetamaskButton();
    } else {
        if (window.ethereum.chainId == "0x61") {
            console.log("Already connected to binance testnet...")
            return
        }

        const chain = {
            chainId: "0x61",
            chainName: "Binance Smart Chain Testnet",
            nativeCurrency: {
                name: "Binance Chain Native Token",
                symbol: "BNB",
                decimals: 18,
            },
            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s3.binance.org:8545"],
            blockExplorerUrls: ["https://testnet.bscscan.com/"],
            iconUrls: [
                "https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/550eda20-1b9a-4bc7-9a65-e4a329e8bb57.png"
            ]
        };
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [chain],
        }).catch((error) => {
            console.log(error);
        });
        window.location.reload();
    }
}

Cryptopunks.connectMetamask = async () => {
    const provider = await detectEthereumProvider()

    if (provider) {
        console.log("Provider is found...")
        await window.ethereum.enable()
        Cryptopunks.PunkState.accounts = await ethereum.request({
            method: 'eth_accounts',
        });
        console.log("Metamask account changed: " + Cryptopunks.PunkState.accounts[0]);
        Cryptopunks.PunkState.account = Cryptopunks.PunkState.accounts[0];
        Cryptopunks.PunkState.provider.eth.defaultAccount = Cryptopunks.PunkState.accounts[0];
        Cryptopunks.punkContract.defaultAccount = Cryptopunks.PunkState.account;
        if (Cryptopunks.PunkState.account === undefined) {
            Cryptopunks.PunkState.accountUnlocked = false;
        } else {
            Cryptopunks.PunkState.accountUnlocked = true;
        }
        Cryptopunks.PunkState.accountQueried = true;

        console.log("Provider is connected...")
        Cryptopunks.PunkState.provider = new Web3(window.web3.currentProvider);
        window.web3 = Cryptopunks.PunkState.provider;

        initConnectedMetamask();
        initPayButton();
        Cryptopunks.connectToMainnetBSC();
        Cryptopunks.getContract();
    } else {
        console.log("Provider is not found...")
        Cryptopunks.getContract();
        initConnectButton();
    }
};

async function cryptopunksApp() {
    await Cryptopunks.checkWeb3();
    await Cryptopunks.getContract();
    console.log(Cryptopunks.punkContract.address);
    initCryptopunkSold();
}

cryptopunksApp();