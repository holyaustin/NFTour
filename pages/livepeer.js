import { useState } from 'react'
//import { ethers } from 'ethers'
import { useRouter } from 'next/router'
//import Web3Modal from 'web3modal'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const API_URL = process.env.API_URL;
const web3 = createAlchemyWeb3(API_URL);

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x05F31E6C25C870270450D103f2b7765C47fF072b";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

export default function CreateItem() {
  const [formInput, updateFormInput] = useState({ name: '' })
  const router = useRouter()

  async function livepeer() {
    const { name } = formInput
    mintNFT(name);
  
  }

  async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
    const { name } = formInput
    const data = JSON.stringify({ name })
    //the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 500000,
      'maxPriorityFeePerGas': 2999999987,
      'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);

  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="Enter Metadata url from Livepeer beginning with ipfs://"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />

        <button onClick={livepeer} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Mint Video NFT
        </button>
      </div>
    </div>
  )
}