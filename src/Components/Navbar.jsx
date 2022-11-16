import React from 'react'
import metabnb from '../Assets/metabnb.png'
import home from '../Assets/homelogo.png'
import '../Components/Navbar.css'
import {Link} from 'react-router-dom'
import Place from '../Pages/Place'
import Home from '../Pages/Home'
import { useContext } from 'react'
import { AppContext } from '../App'



const Navbar = () => {
    const {showWallet, setshowWallet} = useContext(AppContext)
    
    return(
    <div className='navbar'>
        <div className='logo'>
            <img src={home} alt='' />
            <img src={metabnb} alt='' />
        </div>  

        <div className='navigation'>
            <ul>
                <li > <Link to='/' element={<Home />} style={{'textDecoration': 'none', 'color':'#000'}}>Home</Link></li>
                <li> <Link to='/place' element={<Place />}  style={{'textDecoration': 'none', 'color': '#000'}}>Place to stay</Link> </li>
                
                <li> NFTs </li>
                <li> Community </li>
            </ul>
        </div>

        <div>
            <button onClick={()=> {
                setshowWallet(true)
            }}>Connect Wallet</button>
        </div>
    </div>
)}
export default Navbar