require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/HrK5j6CggeYc0dX6cwfR-alGBdN3J0__',
      accounts: ['b3b3d133f888b7580e43820391ef4cc64894a770a1fe25a56dc06d2361559999'],
    },
  },
};