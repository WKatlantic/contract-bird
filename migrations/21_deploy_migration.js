require("dotenv").config();
const verify = require("../src/verify");

const BErc20BIRDDelegate = artifacts.require("BErc20BIRDDelegate");

module.exports = async (deployer, network) => {

    /* Deploy Bird BErc20BIRDDelegate */
    await deployer.deploy(BErc20BIRDDelegate);

    if (network !== "development")
        await verify.bscscanVerify(
            BErc20BIRDDelegate,
            network,
            process.env.BSCSCANAPIKEY,
            1
        );
};