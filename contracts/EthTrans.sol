// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "./Token.sol";

contract EthTrans {
  string public name = "EthTrans Exchange";
  Token public token;
  uint public rate = 100;

  event TokensPurchased(
    address account,
    address token,
    uint amount
  );

  // ...

  function buyTokens() public payable {
    // Calculate the number of tokens to buy
    uint tokenAmount = msg.value;

    require(token.balanceOf(address(this)) >= tokenAmount);

    token.transfer(msg.sender, tokenAmount);

    // Emit an event
    emit TokensPurchased(msg.sender, address(token), tokenAmount);
  }

}