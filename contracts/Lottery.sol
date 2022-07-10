// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {LotteryToken} from "./Token.sol";

contract Lottery is Ownable {
    bool public betsOpen;

    // Encapsulation for the state -
    //     function betsOpen() public view returns (bool betsOpen) {
    //         betsOpen = _betsOpen;
    //     }
}
