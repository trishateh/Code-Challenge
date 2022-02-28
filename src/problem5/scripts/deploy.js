
const main = async () => {

    const utilityContractFactory = await hre.ethers.getContractFactory("Utility");
    const utilityContract = await utilityContractFactory.deploy();
    await utilityContract.deployed();
    console.log("Contract deployed to:", utilityContract.address);

};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();