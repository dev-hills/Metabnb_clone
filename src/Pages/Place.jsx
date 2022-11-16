import React from 'react'
import Navbar from '../Components/Navbar'
import '../Components/place.css'
import Filter from '../Assets/Filter.png'
import frame1 from '../Assets/Frame 1.png'
import frame2 from '../Assets/Frame 2.png'
import frame3 from '../Assets/Frame 3.png'
import frame4 from '../Assets/Frame 4.png'
import frame5 from '../Assets/Frame 5.png'
import frame6 from '../Assets/Frame 6.png'
import frame7 from '../Assets/Frame 7.png'
import frame8 from '../Assets/Frame 8.png'
import frame9 from '../Assets/Frame 9.png'
import frame10 from '../Assets/Frame 10.png'
import frame11 from '../Assets/Frame 11.png'
import frame12 from '../Assets/Frame 12.png'
import frame13 from '../Assets/Frame 13.png'
import frame14 from '../Assets/Frame 14.png'
import frame15 from '../Assets/Frame 15.png'
import frame16 from '../Assets/Frame 16.png'
import star from '../Assets/Star.png'
import Footer from './Footer'
import Connect from '../Components/Connect';
import { AppContext } from '../App';
import { useContext } from 'react';

const Place = () => {
    const {showWallet, setshowWallet} = useContext(AppContext)

  return (
    <div>
      {showWallet ?    <Connect />: null}
      <Navbar />

      <div className='navigationn'>
        <a href='#'>Restaurant</a>
        <a href='#'>Cottage</a>
        <a href='#'>Castle</a>
        <a href='#'>Fantast city</a>
        <a href='#'>Beach</a>
        <a href='#'>Carbins</a>
        <a href='#'>Off-grid</a>
        <a href='#'>Farm</a>

        <img src={Filter} alt=''/>
      </div>

      <div className='groups'>
        <div className='group_frame2'>
        <div className='frame5'>
            <img src={frame1} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame6'>
            <img src={frame2} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame7'>
            <img src={frame3} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame8'>
            <img src={frame4} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>
        </div>

        <div className='group_frame1'>
        <div className='frame1'>
            <img src={frame5} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame2'>
            <img src={frame6} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame3'>
            <img src={frame7} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame4'>
            <img src={frame8} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>


        </div>

        <div className='group_frame3'>
        <div className='frame9'>
            <img src={frame9} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame10'>
            <img src={frame10} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame11'>
            <img src={frame11} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame12'>
            <img src={frame12} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>


        </div>

        <div className='group_frame4'>
        <div className='frame13'>
            <img src={frame13} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame14'>
            <img src={frame14} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame15'>
            <img src={frame15} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>

        <div className='frame16'>
            <img src={frame16} alt =''/>
                <div className='info'>
                    <div className='info_col1'>
                        <h4>Desert King</h4>
                        <h4>2345km away</h4>
                        <div>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                        <img src={star} alt=''/>
                    </div>
                </div>    

                    <div className='info_col2'>
                        <h5>1MBT per night</h5>
                        <h4>available for 2weeks stay</h4>
                    </div>
                </div>
        </div>


        </div>
      </div>

     <Footer /> 
    </div>
  )
}

export default Place