const MyTokenNFT = artifacts.require("MyTokenNFT");

module.exports = function (deployer) {
  deployer.deploy(MyTokenNFT);
};
