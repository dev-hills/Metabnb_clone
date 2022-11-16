import React from 'react'
import Metamask from '../Assets/Metamask.png'
import MBtoken from '../Assets/MBtoken.png'
import Opensea from '../Assets/Opensea.png'
import '../Components/Navbar.css'

const Homefooter = () => (
    <div>
        <footer>
            <img src={MBtoken} alt=''/>
            <img src={Metamask} alt=''/>
            <img src={Opensea} alt=''/>
        </footer>
    </div>
    )


export default Homefooter