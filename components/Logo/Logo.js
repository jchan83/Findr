import React from 'react';
import Tilt from 'react-tilt';
import './logo.css'
import ball from './crystalball.png'

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 center " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px', height: 100}} alt='crystalball' src={ball}/> </div>
            </Tilt>
        </div>
    )
}


export default Logo