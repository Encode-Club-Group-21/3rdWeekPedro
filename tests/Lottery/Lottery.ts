// importing from chai, TDD library for node
import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
// importing the Lottery contract from Typechain, (Typescript bindings for Ethereum smart contracts)
import { Lottery, LotteryToken } from "../../typechain";
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
  let tokenContract: LotteryToken;

  this.beforeEach(async function () {
    accounts = await ethers.getSigners();

    lotteryFactory = await ethers.getContractFactory("Lottery");
    lotteryContract = await lotteryFactory.deploy(
      "BetToken",
      "BET",
      DEFAULT_PURCHASE_RATIO,
      ethers.utils.parseEther(BET_PRICE.toFixed(18)),
      ethers.utils.parseEther(BET_FEE.toFixed(18))
    );
    await lotteryContract.deployed();

    const tokenContractAddress = await lotteryContract.paymentToken();
    const tokenContractFactory = await ethers.getContractFactory(
      "LotteryToken"
    );
    tokenContract = await tokenContractFactory.attach(tokenContractAddress);
  });

  describe("When the Lottery Contract is deployed", async () => {
    it("defines the ratio as provided in parameters", async () => {
      const purchaseRatio = await lotteryContract.purchaseRatio();
      expect(purchaseRatio).to.eq(DEFAULT_PURCHASE_RATIO);
    });

    it("uses a valid ERC20 as a payment token", async () => {
      const symbol = await tokenContract.symbol();
      const name = await tokenContract.name();
      console.log(symbol, name);
      expect(symbol.length).to.be.greaterThan(0);
      expect(name.length).to.be.greaterThan(0);
    });
    it("has the correct bet price and bet fee as defined in parameters", async () => {});
  });
  describe("When a user purchases an ERC20", async () => {
    it("charges the correct of ETH", async () => {
      // TODO
    });
    it("send the correct amount of tokens", async () => {
      // TODO
    });
  });
  describe("When a user returns a ERC20", async () => {
    it("charges the correct amount of ERC20", async () => {
      // TODO
    });
    it("send the correct amount of eth", async () => {
      // TODO
    });
  });
  describe("When the owner opens the bets", async () => {
    it("correctly sets the closing time ", async () => {
      // TODO
    });
    it("is able to be closed", async () => {
      // TODO
    });
    describe("When a user places a bet and bets are open", async () => {
      it("correctly updates the ownerpool", async () => {
        // TODO
      });
      it("correctly updates the prize pool", async () => {
        // TODO
      });
      it("registers the bet in the slot array", async () => {
        // TODO
      });
    });
    describe("When a user places a bet and bets are closed", async () => {
      it("fails if the bets are not open ", async () => {
        // TODO
      });
    });
  });

  describe("When a user purchases an ERC20 from the token contract", async () => {
    it("charges the correct amount of ETH", async () => {
      // TOD
    });

    it("gives the correct amount of tokens", async () => {
      // TODO
    });
  });
});
