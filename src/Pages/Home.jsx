import React from 'react'
import Navbar from '../Components/Navbar'
import Homemain from '../Components/Homemain'
import Homefooter from '../Components/Homefooter'
import Nft from './Nft'
import Inspiration from './Inspiration'
import Footer from './Footer'
import Connect from '../Components/Connect'
import { AppContext } from '../App';
import { useContext } from 'react';

const Home = () =>  {
    const {showWallet, setshowWallet} = useContext(AppContext)
    return(   <div>
        <Navbar />
        <Homemain />
        <Homefooter />
        <Inspiration/>
        <Nft />
        <Footer/>
        {showWallet ?    <Connect />: null}
     
    
    </div>)}

export default Home