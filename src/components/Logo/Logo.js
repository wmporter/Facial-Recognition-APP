import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt 
                style={{ height: '150px', width: '150px'}}
                className=' Tilt br2 shadow-2'
            >
                <div className='pa3'>
                    <img style={{paddingTop: '5px'}} alt='img' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;