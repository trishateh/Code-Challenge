const { ethers } = require ("ethers");
require('dotenv').config();
import ABI from '../artifacts/contracts/Utility.json'

const ADDR = "0xbee5a1B92Ca3A37D9EAB2c3B2Acd45a5e2200974";   // rinkeby


const ADDRESS = process.env.PRIVATE_KEY; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x97fE9540533e5fC0F971eA03fBa69942292b1053",
];

const provider = new ethers.providers.JsonRpcProvider(
    `https://rinkeby.infura.io/v3/${process.env.STAGING_INFURA_KEY}`, {
        name: "rinkeby", chainId: 4
    }
);

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI.abi, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);