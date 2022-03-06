/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div background-color='blue'>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFTour</p>
        <div className="flex mt-4 text-xl font-bold">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/video-nft">
            <a className="mr-6 text-pink-500">
              Create Video NFT
            </a>
          </Link>
          <Link href="/picture-nft">
            <a className="mr-6 text-pink-500">
              Create Picture NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
          <Link href="https://testnets.opensea.io/collection/mynft-biayn4xgqq">
            <a className="mr-6 text-pink-500">
             OpenSea
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp