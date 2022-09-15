
require('dotenv').config()
const ethers = require('ethers')
const colors = require("colors")
var Web3 = require('web3');
const fs = require('fs');

const { HTTP_PROVIDER_LINK } = process.env
const { ERC721_ABI } =require("./nftContract-abi.js");
const provider = new ethers.providers.JsonRpcProvider(HTTP_PROVIDER_LINK)

const NFT_ADDRESS = "0xbd6038c4bb496e0ea4d67115a927bdcfb99cdc11"
const nftContract = new ethers.Contract(
  NFT_ADDRESS,
  ERC721_ABI,
  provider
);

var web3;

async function ownerOf(id) {
  try {
    const addr = await nftContract.ownerOf(id);
    return addr;
  } catch(e) {
    return "";
  }
}

const data = {};

async function main() {
  try {
    web3 = new Web3(HTTP_PROVIDER_LINK);
    totalSupply = await nftContract.totalSupply();
    console.log("Searching ".green, totalSupply.toString(), " of NFTs");


    for(let i = 1 ;i <= totalSupply; i++) {
      const addr = await ownerOf(i);
      console.log(i, " : ", addr);
      if(data[addr]) {
        data[addr].push(i);
      } else {
        data[addr] = [i];
      }
    }
  } catch (error) {
    console.log(error);
  }
  fs.writeFile("holders-"+NFT_ADDRESS+".json", JSON.stringify(data), (err) => {
    if(err) {
      console.log(err.red);
    } else {
      console.log("File written successfully\n".green);
    }
  })
}

main();