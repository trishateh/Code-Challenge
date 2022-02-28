require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: process.env.STAGING_INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },

  },
};
