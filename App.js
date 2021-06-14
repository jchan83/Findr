import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Particles from 'react-particles-js';




function App() {
  return (
    <div className="App">,
    <Particles className='particles'
    params={{
        polygon: {
            enable: true,
            type: 'inside',
            move: {
                radius: 10
            },
            url: 'path/to/svg.svg'
        }
    }} />
      <Navigation/>
        <Logo/>
        <ImageLinkForm/>
        {/*
        <FaceRecognition/>*/}
    </div>
  );
}

export default App;
