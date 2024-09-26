
const Web3 = require('web3');

// Connect to a local Ethereum node
const web3 = new Web3('http://localhost:8545');

// Function to get the balance of an address
async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    console.log(`Balance of ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
  } catch (error) {
    console.error(`Error getting balance: ${error}`);
  }
}

// Example usage
const address = '0xYourEthereumAddressHere';
getBalance(address);
