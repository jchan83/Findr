import React from 'react';
import Tilt from 'react-tilt';
import './logo.css'
import ball from './crystalball.png'

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}}alt='crystalball' src={ball}/> </div>
            </Tilt>
        </div>
    )

}








export default Logo