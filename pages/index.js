import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { bgText, pagebackground } from '../styles/styles.module.css'

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const router = useRouter()
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
    const data = await contract.fetchMarketItems()

    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }

  async function tour() {  
    router.push('/tour')
  }
  async function videos() {  
    router.push('/video-nft')
  }
  async function pictures() {  
    router.push('/picture-nft')
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return (
    <div className={pagebackground}>
    <div className="flex justify-center" >
      <div >
          <p className="text-2xl font-bold text-white"></p>
                <p className={bgText}>
                NFTour ... where your tour becomes Memorable
                  <br />
                Turn your travel and tour into video and picture NFTs
                <br />
                Sell NFTs on Opensea and make residual income
                </p>
              <button onClick={videos} className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 text-2xl rounded" >Upload Video as NFT</button>
              <button onClick={tour} className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 text-2xl rounded" >Browse Tour App</button>
              <button onClick={pictures} className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 text-2xl rounded" >Upload Pictures as NFT</button>
      </div>
    </div>
    </div>
  )
}