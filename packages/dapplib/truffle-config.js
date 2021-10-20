require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rebel ranch punch install industry equal giant'; 
let testAccounts = [
"0x6cdafbeae2d02856ec6869c16993d0e82245df9e94d6c5481f18cbd775ccf543",
"0xb2cec24fb0a549dceb6c496f20d9405cedb954a709d7852b44f69f62a01573c5",
"0xde0f329e082e70da30681fb735f85d6ee3bf7f07194ae3a335c9721d446472d0",
"0xee4eebdbf17d9445de58c8e851d744f7c37bdda010483d44a127937f375c8335",
"0x4e69e0b4235dbb31473dc320cf33375f69e8e37ffdb0f221294aa91c20124eae",
"0x1c50e9019f7d3c455a0bccab23f397044c24c78975124582a3f4299c999bb6f6",
"0x4c87559319733f6a3b85f5fb911ac9b3f9ae337d29af7ea56009eeea1373e596",
"0x363f2ec3b83307b1eb22bf50c5da0a9280ec7dd820485274e58a4241bd2e14f9",
"0x86014324fddc2a968901ac11ffc3f2a80826137a3a4396da6a6cbe69b627e191",
"0x6f9bb148c1771d4493b18e7fa34d5db7f2275107df318f2987dacd85626467fb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


