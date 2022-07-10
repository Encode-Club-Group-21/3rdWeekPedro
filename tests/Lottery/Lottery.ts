// importing from chai, TDD library for node
import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
// importing the Ballot contract from Typechain, (Typescript bindings for Ethereum smart contracts)
import { Lottery } from "../../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// For token purchases
import { BigNumber } from "ethers";

const DEFAULT_PURCHASE_RATIO = 100;
const BET_PRICE = 10;
const BET_FEE = 1;

describe("Lottery", function () {
  let lotteryContract: Lottery;
  let lotteryFactory: any;
  let tokenContractFactory: any;
  let accounts: SignerWithAddress[];

  this.beforeEach(async function () {
    accounts = await ethers.getSigners();

    [lotteryFactory, tokenContractFactory] = await Promise.all([
      ethers.getContractFactory("Lottery"),
      ethers.getContractFactory("BetToken"),
    ]);
    lotteryContract = await lotteryFactory.deploy(
      "BetToken",
      "BET",
      DEFAULT_PURCHASE_RATIO,
      ethers.utils.parseEther(BET_PRICE.toFixed(18)),
      ethers.utils.parseEther(BET_FEE.toFixed(18))
    );
    await lotteryContract.deployed();

    tokenContract = await lotteryContract.paymentToken();
  });

  describe("When the Lottery Contract is deployed", async () => {
    it("defines the ratio as provided in parameters", async () => {
      const purchaseRatio = await lotteryContract.purchaseRatio();
      expect(purchaseRatio).to.eq(DEFAULT_PURCHASE_RATIO);
    });
  });
});
