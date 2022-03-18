const Token = artifacts.require("Token");
const EthTrans = artifacts.require("EthTrans");

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("EthSwap", (accounts) => {
  let token, ethTrans;

  before(async () => {
    token = await Token.deployed();
    ethTrans = await EthTrans.new();
    
    await token.transfer(accounts[1], tokens("1000"));
  });

  describe("Token deployment", async () => {
    it("contract has a name", async () => {
      const name = await token.name();
      assert.equal(name, "DApp Token");
    });
  });

  describe("EthTrans deployment", async () => {
    it("contract has a name", async () => {
      const name = await ethTrans.name();
      assert.equal(name, "EthTrans Exchange");
    });

    it("contract has tokens", async () => {
        let balance = await token.balanceOf(accounts[1]);
      assert.equal(balance.toString(), tokens("1000"));
    });
  });
});
