//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Game2 {
  uint public x;
  uint public y;

  function setX(uint _x) external {
    x = _x;
  }

  function setY(uint _y) external {
    y = _y;
  }

  event Winner(address winner);

  function win() public {
    console.log(x);
    console.log(y);
    require(x > 0 && y > 0);
    require(x + y == 50);
    emit Winner(msg.sender);
  }
}