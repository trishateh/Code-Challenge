// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "hardhat/console.sol";


interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract Utility {

    constructor() {
        console.log("This is my utility contract.");
    }

    struct TokenBalance {
        address token;
        uint balance;
    }


    function getBalances(address user, address[] memory tokens) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory allTokens = new TokenBalance[] (tokens.length);

        for (uint i=0; i < tokens.length; i++) {
            IERC20 tokenInstance = IERC20(tokens[i]);
            TokenBalance memory addrBalances = TokenBalance({
              token: tokens[i],
              balance: tokenInstance.balanceOf(user)
          });
            allTokens[i] = addrBalances;
            
        }
        return allTokens;
    }
}