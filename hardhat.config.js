/* eslint-disable import/no-extraneous-dependencies */
require("dotenv").config();

require("@typechain/hardhat");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");
require("solidity-coverage");

// Esta es una tarea de ejemplo de Hardhat. Para aprender cómo crear la tuya, visita
// https://hardhat.org/guides/create-task.html
task("accounts", "Imprime la lista de cuentas", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    console.log(account.address);
  }
});



// Necesitas exportar un objeto para configurar tu configuración
// Visita https://hardhat.org/config/ para obtener más información

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false, // ¿deberían generarse siempre sobrecargas con firmas completas como deposit(uint256), incluso si no hay sobrecargas?
    externalArtifacts: [], // arreglo opcional de patrones globales con artefactos externos para procesar (por ejemplo, bibliotecas externas de node_modules)
  },
  defaultNetwork: 'avax',
  networks: {
    'avax': {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts: [process.env.PRIV_KEY],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
