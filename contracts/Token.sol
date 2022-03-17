// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;

     constructor(uint256 _supply) ERC20("Token", "TOK") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    }
}