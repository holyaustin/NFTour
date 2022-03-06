### NFTour. 
## Minting Tour Videos and Pictures as NFT Collectible. 

### Running this project


To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/dabit3/polygon-ethereum-nextjs-marketplace.git

cd polygon-ethereum-nextjs-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```

### Configuration

To deploy to Polygon test or main networks, update the configurations located in __hardhat.config.js__ to use a private key and, optionally, deploy to a private RPC like Infura.



NFT.storage Key

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4Zjc4ODAwMkUzZDAwNEIxMDI3NTFGMUQ0OTJlNmI1NjNFODE3NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NjQ4MTE0NDM2NiwibmFtZSI6IndlYjNjb24ifQ.aOyBgReqM7LecjTTHSzrsIdbcTfSLdjRqsCEvd_EOak

ipfs GATEWAYS
https://<gateway-host>/ipfs/
https://ipfs.io/ipfs/
https://dweb.link/ipfs/

nftMarketplace deployed to: 0x20bc104513a90B342639572F24045F5EfCF5A9be
MyNFT Contract deployed to address: 0x05F31E6C25C870270450D103f2b7765C47fF072b



Livepeer key
bffb0e4c-27d9-48bc-9731-f533a6f0576a

{
  "videoFileCid": "QmYCj8nwbj58LEavSQX4cyGy2tk6A8Dc3kYmqizNuLgwxf",
  "nftMetadataCid": "Qmcy4vTY3TcTmxRhSdqGkN41GTABFxWdvBM7zYwn2cwwDf",
  "videoFileUrl": "ipfs://QmYCj8nwbj58LEavSQX4cyGy2tk6A8Dc3kYmqizNuLgwxf",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmYCj8nwbj58LEavSQX4cyGy2tk6A8Dc3kYmqizNuLgwxf",
  "nftMetadataUrl": "ipfs://Qmcy4vTY3TcTmxRhSdqGkN41GTABFxWdvBM7zYwn2cwwDf",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/Qmcy4vTY3TcTmxRhSdqGkN41GTABFxWdvBM7zYwn2cwwDf"
}
5. Mint your NFT at:
https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=ipfs://Qmcy4vTY3TcTmxRhSdqGkN41GTABFxWdvBM7zYwn2cwwDf

{
  "videoFileCid": "QmV84wxF5gRM1Ntptz5UV9PH2TjdYYSSuFPiM2QFmzipZx",
  "nftMetadataCid": "QmNzHxyxvQXHBE3P6Ty5Lah7e6SNLpXYyd1SjSXHv7Uh5e",
  "videoFileUrl": "ipfs://QmV84wxF5gRM1Ntptz5UV9PH2TjdYYSSuFPiM2QFmzipZx",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmV84wxF5gRM1Ntptz5UV9PH2TjdYYSSuFPiM2QFmzipZx",
  "nftMetadataUrl": "ipfs://QmNzHxyxvQXHBE3P6Ty5Lah7e6SNLpXYyd1SjSXHv7Uh5e",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmNzHxyxvQXHBE3P6Ty5Lah7e6SNLpXYyd1SjSXHv7Uh5e"
}
5. Mint your NFT at:
https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=ipfs://QmNzHxyxvQXHBE3P6Ty5Lah7e6SNLpXYyd1SjSXHv7Uh5e

{
  "videoFileCid": "QmS5M3Rtywp5nNrwZHWuaCd9hLn7r1MPJsNzZ6HkCV5ifK",
  "nftMetadataCid": "QmZdw44VU3q9bMTqDevq73CWUKjTULBj5Xv3tBCZvhiotk",
  "videoFileUrl": "ipfs://QmS5M3Rtywp5nNrwZHWuaCd9hLn7r1MPJsNzZ6HkCV5ifK",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmS5M3Rtywp5nNrwZHWuaCd9hLn7r1MPJsNzZ6HkCV5ifK",
  "nftMetadataUrl": "ipfs://QmZdw44VU3q9bMTqDevq73CWUKjTULBj5Xv3tBCZvhiotk",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmZdw44VU3q9bMTqDevq73CWUKjTULBj5Xv3tBCZvhiotk"
}
5. Mint your NFT at:
https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=ipfs://QmZdw44VU3q9bMTqDevq73CWUKjTULBj5Xv3tBCZvhiotk

{
  "videoFileCid": "QmTqAEkj5P4w3Q238AqAT6hGESu6xZVe6tXsgT1vDkkQA6",
  "nftMetadataCid": "QmTJtSJW4kZ12AFKfXRvRGnKXx2BwZPdg9gwjzjgRTzdKP",
  "videoFileUrl": "ipfs://QmTqAEkj5P4w3Q238AqAT6hGESu6xZVe6tXsgT1vDkkQA6",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmTqAEkj5P4w3Q238AqAT6hGESu6xZVe6tXsgT1vDkkQA6",
  "nftMetadataUrl": "ipfs://QmTJtSJW4kZ12AFKfXRvRGnKXx2BwZPdg9gwjzjgRTzdKP",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmTJtSJW4kZ12AFKfXRvRGnKXx2BwZPdg9gwjzjgRTzdKP"
}
5. Mint your NFT at:
https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=ipfs://QmTJtSJW4kZ12AFKfXRvRGnKXx2BwZPdg9gwjzjgRTzdKP

{
  "videoFileCid": "QmUQ5pgWkTJSS6VfwpheUekeRikTBfKnEVndu3UYjP9Dmd",
  "nftMetadataCid": "QmfAnShJoEhDVeE9gnWoXe65Zs1iX1QCLo9YyvRmRzy252",
  "videoFileUrl": "ipfs://QmUQ5pgWkTJSS6VfwpheUekeRikTBfKnEVndu3UYjP9Dmd",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmUQ5pgWkTJSS6VfwpheUekeRikTBfKnEVndu3UYjP9Dmd",
  "nftMetadataUrl": "ipfs://QmfAnShJoEhDVeE9gnWoXe65Zs1iX1QCLo9YyvRmRzy252",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmfAnShJoEhDVeE9gnWoXe65Zs1iX1QCLo9YyvRmRzy252"
}

{
  "videoFileCid": "QmcVkqreRZ2ZnXBsEJk2G25DrAtbCgRFkdvJQvSckqjAwS",
  "nftMetadataCid": "QmXaCFH7oyhxsXdHCBx2MZYH7np1c6Emob2uNezSaAnENJ",
  "videoFileUrl": "ipfs://QmcVkqreRZ2ZnXBsEJk2G25DrAtbCgRFkdvJQvSckqjAwS",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmcVkqreRZ2ZnXBsEJk2G25DrAtbCgRFkdvJQvSckqjAwS",
  "nftMetadataUrl": "ipfs://QmXaCFH7oyhxsXdHCBx2MZYH7np1c6Emob2uNezSaAnENJ",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmXaCFH7oyhxsXdHCBx2MZYH7np1c6Emob2uNezSaAnENJ"
}

{
  "videoFileCid": "QmadrtwPhjahYkPbkPLi5Gt477WwJnF88MxSGiyCbGecDH",
  "nftMetadataCid": "QmdodCaikxC78az8FbTjDrWwNNEyDBpUQuoZWhzrJJeQAR",
  "videoFileUrl": "ipfs://QmadrtwPhjahYkPbkPLi5Gt477WwJnF88MxSGiyCbGecDH",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmadrtwPhjahYkPbkPLi5Gt477WwJnF88MxSGiyCbGecDH",
  "nftMetadataUrl": "ipfs://QmdodCaikxC78az8FbTjDrWwNNEyDBpUQuoZWhzrJJeQAR",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmdodCaikxC78az8FbTjDrWwNNEyDBpUQuoZWhzrJJeQAR"
}
5. Mint your NFT at:
https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=ipfs://QmdodCaikxC78az8FbTjDrWwNNEyDBpUQuoZWhzrJJeQAR

{
  "videoFileCid": "QmQkHkpkGQ1RszYyNkGc9h9QhbYzoLyUWq5uBc7EGwgtWX",
  "nftMetadataCid": "QmemGSBjtYrX7mstFvoe8iiifPMHwkHL2CDJC2tqgUEJNh",
  "videoFileUrl": "ipfs://QmQkHkpkGQ1RszYyNkGc9h9QhbYzoLyUWq5uBc7EGwgtWX",
  "videoFileGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmQkHkpkGQ1RszYyNkGc9h9QhbYzoLyUWq5uBc7EGwgtWX",
  "nftMetadataUrl": "ipfs://QmemGSBjtYrX7mstFvoe8iiifPMHwkHL2CDJC2tqgUEJNh",
  "nftMetadataGatewayUrl": "https://ipfs.livepeer.com/ipfs/QmemGSBjtYrX7mstFvoe8iiifPMHwkHL2CDJC2tqgUEJNh"
}
5. Mint your NFT at:
https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=ipfs://QmemGSBjtYrX7mstFvoe8iiifPMHwkHL2CDJC2tqgUEJNh

import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Web3Modal from 'web3modal'
import { NFTStorage } from 'nft.storage'

const NFT_STORAGE_TOKEN  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4Zjc4ODAwMkUzZDAwNEIxMDI3NTFGMUQ0OTJlNmI1NjNFODE3NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NjQ4MTE0NDM2NiwibmFtZSI6IndlYjNjb24ifQ.aOyBgReqM7LecjTTHSzrsIdbcTfSLdjRqsCEvd_EOak'
const client2 = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
//const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [imagefile, setimagefile] = useState(null);
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
      console.log('file is : ', file);
      setimagefile(file);
    try {
      const added = await client2.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file1: ', error)
    }  
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    console.log('name: ',name)
    console.log('description: ',description)
    console.log('price: ',price)
    console.log('file is : ', imagefile);
    console.log('file: ',fileUrl)
    //const imageFile = new File(['<DATA>'], 'cat.png', { type: 'image/png' })
    //const data = JSON.stringify({
    //  name, description, image: fileUrl})

    //console.log('imageFile: ',imageFile)
    try {
      const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
      console.log('client value is ',client);
      const metadata = await client.store({
        name,
        description,
        image: imagefile,
      })
      console.log('data to be uploaded are: ',data);
      const url = `https://ipfs.io/ipfs/${added.path}`
      console.log('Url of data is: ',url);
      console.log('metadata url is: ',metadata.url)
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url
    } catch (error) {
      console.log('Error uploading file2 to IPFS: ', error)
    }  
  }

  async function listNFTForSale() {
    const url = await uploadToIPFS()
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, 'ether')
    let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    price = price.toString()
    console.log('listing price : ', listingPrice)
    console.log('price : ', price)
    console.log('url : ', url)
    let transaction = await contract.createToken(url, price, { value: listingPrice })
    await transaction.wait()
   
    router.push('/explore')
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Asset Description"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUrl && (
            <><Image
              className="rounded mt-4" 
              alt=""
              src={fileUrl} 
              layout="responsive"
              width={350}
              height={205}
              /></>
          )
        }
        <button onClick={listNFTForSale} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create Picture NFT
        </button>
      </div>
    </div>
  )
}

