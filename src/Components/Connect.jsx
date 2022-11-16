import React from 'react';
import x from '../Assets/x.png'
import '../App.css'

import Walletconnect from '../Assets/walletconnect.png'
import meta from '../Assets/Meta.png'
import arrow from '../Assets/arrow.png'
import { useContext } from 'react';
import { AppContext } from '../App';


const Connect = () => {
    const {showWallet, setshowWallet} = useContext(AppContext)

  return (
    <div className='wallet'>
        <div className='top'>
            <h3>Connect Wallet</h3>
            <img src={x} alt='' className='x' onClick={
              ()=>{setshowWallet(false)}
            }/>
        </div>

        <hr />

        <h5>Choose your preferred wallet</h5>

        <div className='type'>
          <div className='type1'>
            <img src={meta} alt='' className='imgg'/>
            <img src={arrow} alt='' className='arrow'/>
          </div>
          <div className='type2'>
            <img src={Walletconnect} alt='' className='imgg'/>
            <img src={arrow} alt='' className='arrow'/>
          </div>
        </div>
    </div>
  )
}

export default Connect