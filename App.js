import './App.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import LandingPage from './components/LandingPage/LandingPage';

  const particlesSpecs = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }


  class App extends Component {
   

    render() {
    return (
      <div className="App">
        <Particles className ="particles"
        params={particlesSpecs}/>
        <LandingPage test={this.state}/>
      </div>
       );
      }    
    }
        
    export default App;

          {/*
            <h4>coordinates</h4>
            <p>Lat: {this.state.latitude} </p>
          <p>Long: {this.state.longitude}</p>
          <div className= "pa5">
          <button onClick={this.getLocation}>Get coordinates</button>
          </div>
          }
          {/*
          <FaceRecognition/>*/}



           // constructor() {
    //   super();
    //   this.state ={
    //     latitude: null,
    //     longitude: null,
    //     userAddress: null
    //   };
    //   this.getLocation = this.getLocation.bind(this);
    //   this.getCoordinates = this.getCoordinates.bind(this);


    //   this.state ={
    //     input: '',
    //   };
    // }
    
    // getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(this.getCoordinates);
    //   } else {
    //     alert ("Geolocation is not supported by this browser.");
    //   }
    // }

    // getCoordinates(position) {
    //   this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude
    //   })
    // }