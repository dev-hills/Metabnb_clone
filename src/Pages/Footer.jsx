import React from 'react'
import metabnb_logo from '../Assets/metabnb logo.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'
import '../Components/footer.css'

const Footer = () => (
    <div className='footer'>
        <div className='logo'>
            <img src={metabnb_logo} alt='' className='metabnb'/>
            <div className='social'>
                <img src={facebook} alt=''/>
                <img src={instagram} alt=''/>
                <img src={twitter} alt=''/>
            </div>
            <p className='copyright'>&copy; 2022 Metabnb</p>
        </div>

        <div className='infoo'>
            <div className='row1'>
                <p className='paragraph'>Community</p>
                <ul style={{'list-style-type': 'none'}}>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>

            <div className='row2'>
                <p className='paragraph'>Places</p>
                <ul style={{'list-style-type': 'none'}}>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
            </div>

            <div className='row3'>
                <p className='paragraph'>About us</p>
                <ul style={{'list-style-type': 'none'}}>
                    <li>Road map</li>
                    <li>Creators</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
    )

export default Footer