import React from 'react'
import '../Components/Homemain.css'
import image1 from '../Assets/image 1.png'
import image2 from '../Assets/image 2.png'
import image3 from '../Assets/image 3.png'
import image4 from '../Assets/image 4.png'

const Homemain = () => {
return(
      <div className='main'>
        <div className='main_info'>
          <h1> Rent a <span>Place</span> away from <br/><span>Home</span> in the <span>Metaverse</span></h1>
          <h3>we provide you access to luxury and affordable houses 
            <br/>in the metaverse, get a chance to turn your 
          <br/>imagination to reality at your comfort zone</h3>

          <div className='search'>
            <input type='search' placeholder='Search for location'/>
            <button>Search</button>
          </div>
        </div>

        <div className='image'>
          <div className='image_col1'>
            <img src={image1} alt=''/>
            <img src={image2} alt=''/>
          </div>
          
          <div className='image_col2'>
            <img src={image3} alt=''/>
            <img src={image4} alt=''/>
          </div>
        </div>
    </div>
)
}

export default Homemain