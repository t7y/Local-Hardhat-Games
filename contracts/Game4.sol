//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Game4 {
  uint8 y = 210;

  event Winner(address winner);

  function win(uint8 x) public {
    unchecked {
        uint8 sum = x + y;
        require(sum == 10, "Incorrect argument passed in!");
        // (x + 210) % 256 = 10
        // 266 % 256 = 10
        // x = 56
    }
    emit Winner(msg.sender);
  }
}