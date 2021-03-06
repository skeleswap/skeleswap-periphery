const Router = artifacts.require("SkeleRouter.sol");
const WBNB = artifacts.require("WBNB.sol");

module.exports = async function (deployer, network) {
  let wbnb;
  const FACTORY_ADDRESS = '0xf1dc044D499e23018A0E1020950E93093E413386';
  
  if(network === 'bscmainnet') {
  	wbnb = await WBNB.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
  } else {
  	await deployer.deploy(WBNB);
  	wbnb = await WBNB.deployed();
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
};
