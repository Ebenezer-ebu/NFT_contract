require("dotenv").config();
const Token = artifacts.require("Token");

const { OWNER } = process.env;

contract("Token", (accounts) => {
  before(async () => {
      token = await Token.deployed();
      console.log("Token address: ", token.address)
  });

  it("gives the owner of the token 1M token", async () => {
    let balance = await token.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      "1000000",
      "balance should be 1M tokens for contract creator"
    );
  });

  it("can tranfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("1000", "ether");
    await token.transfer(accounts[1], amount, { from: accounts[0] });

    let balance = await token.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      "1000",
      "balance should be 1k tokens for contract creator"
    );
  });
});
