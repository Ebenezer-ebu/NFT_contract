const Token = artifacts.require("Token");
const EthTrans = artifacts.require("EthTrans");

module.exports = async function (deployer) {
  // Deploy Token
  const token = await Token.deployed();

  // Deploy EthSwap
  await deployer.deploy(EthTrans, token.address); // Add the token address here
  const ethTrans = await EthTrans.deployed();

  // Transfer tokens to EthTrans (1 thousand)
  await token.transfer(ethTrans.address, "1000");
};
