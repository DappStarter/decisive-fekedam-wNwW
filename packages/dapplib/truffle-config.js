require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain smile hidden clinic blue swallow'; 
let testAccounts = [
"0x0d676e919fbf0d68bb05fecd2872c1d25c2b6d7f6069b52cfa69acfc90dbead5",
"0x17016b7c170eda5cef93ac4ee2376c9e4f05635d2bd6fac2814fb4d20bc07999",
"0xf8b1def72ee61720429a33980151746b7c4e415e6d3cb5cd3582235d0966c826",
"0x3f2904776ca5896019fbd09f2df833ce8e738c28d1d8d374ecb8ee57fd17853e",
"0xea83e3b9cd4875a55f8764c6eaf5170d4e405d27cdb84f06eb0cc3d4ce57afb6",
"0x47712c48dd0ee1fb288adc8e54c40477be677e659aece3762e4f83f2c5ae1a35",
"0xa0851462fad8ba446b772c6716adfc5665d7bae92674d68e43a92ecb67179e3b",
"0x76e044098a2cfcf1b4703997b237966b830a9d3766e75d45b3907ccaa6d2563d",
"0x7be9903cbb090030de8e7c81a72e9a09e850c5d8c147064986d8ef708a2a5d39",
"0x83c7208a696a1d04c21c96cebc5635e65a931313f7b3dde372eb5fc3509e3304"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

