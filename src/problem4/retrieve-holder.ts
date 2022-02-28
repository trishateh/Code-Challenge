import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/", { name: 'Binance Smart Chain', chainId: 56 });

const addresses = [
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5",
]

const swthAddress= '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C';

const swthAbi = ["function balanceOf(address) view returns (uint)"];

const swthContract = new ethers.Contract(swthAddress, swthAbi, provider);

async () => {
    addresses.map(async (address) => {
        const balance = await swthContract.balanceOf(address);
        const formattedBalance = ethers.utils.formatEther(balance.toString());
        console.log(address, formattedBalance);
    })
}





