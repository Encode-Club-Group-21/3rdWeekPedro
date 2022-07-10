// importing from chai, TDD library for node
import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
// importing the Ballot contract from Typechain, (Typescript bindings for Ethereum smart contracts)
import { Lottery, BetToken } from "../../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// For token purchases
import { BigNumber } from "ethers";

const DEFAULT_PURCHASE_RATIO = 100;
const BET_PRICE = 10;
const BET_FEE = 1;

describe("Lottery", function () {
  let lotteryContract: Lottery;
  let tokenContract: BetToken;
  let lotteryFactory: any;
  let tokenContractFactory: any;
  let accounts: SignerWithAddress[];

  this.beforeEach(async function () {
    accounts = await ethers.getSigners();

    const lotteryFactory = await ethers.getContractFactory("Lottery");
    lotteryContract = await lotteryFactory
      .deploy
      // Lottery contract arguments
      ();
    await lotteryContract.deployed();
  });
});
