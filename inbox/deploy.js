// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');

// const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// const source = fs.readFileSync(inboxPath, 'utf8');

// modules.exports = solc.compile(source, 1).contracts[':Inbox'];

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'prepare bullet voice abandon shoe wild cabbage float tired snow side laptop',
    'https://rinkeby.infura.io/v3/71574909fcfa4817a86fa97308b3ddb9'
);

const web3 = new Web3(provider);