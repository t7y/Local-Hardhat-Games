// add the game address here and update the contract name if necessary
const gameAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);
  // await game.giveMeAllowance(20000);
  // await game.mint(50);

  // Step 1: Give yourself an allowance of at least 10,000
  const allowanceAmount = 20000;
  let tx = await game.giveMeAllowance(allowanceAmount);
  await tx.wait();

  // Step 2: Mint tokens using the allowance
  const mintAmount = 10000;
  tx = await game.mint(mintAmount);
  await tx.wait();

  // do whatever you need to do to win the game here:
  tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
