import React from 'react'
import '../Components/Nft.css'
import NFTs from '../Assets/NFTs.png'


const Nft = () => {
  return (
    <div className='main_group'> 
      <div className='texts'>
        <h1>Metabnb NFTs</h1>
        <h4>Discover our NFT gift cards collection. Loyal 
            <br/>customers gets amazing gift cards which are 
            <br/>traded as NFTs. These NFTs gives our cutomer
            <br/>access to loads of our exclusive services. </h4>
            <button>Learn More</button>
      </div>

      <div className='tilted_images'>
        <img src={NFTs} alt='' className='img1'/>

      </div>
      
    </div>
  )
}

export default Nft