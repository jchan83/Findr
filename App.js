import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import  SearchBar  from './components/SearchBar/SearchBar'
import Particles from 'react-particles-js';
import { SearchResults, } from './components/SearchResults/SearchResults';
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
    constructor() {
      super();
      this.state ={
        latitude: null,
        longitude: null,
        userAddress: null
      };
      this.getLocation = this.getLocation.bind(this);
      this.getCoordinates = this.getCoordinates.bind(this);


      this.state ={
        input: '',
      };
    }
    
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoordinates);
      } else {
        alert ("Geolocation is not supported by this browser.");
      }
    }

    getCoordinates(position) {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }

    render() {
    return (
      
      <div className="App">
      <Particles className ="particles"
      params={particlesSpecs}/>


      
          <LandingPage test={this.state}/>
          <div className= "pa5">
          
          <button onClick={this.getLocation}>Get coordinates</button>
          <h4>coordinates</h4>
          <p>Lat: {this.state.latitude} </p>
          <p>Long: {this.state.longitude}</p>
          </div>
          {/*
            this.state.latitude && this.state.longitude ?
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&keys=${AIzaSyCaLNtB5M0s_ptEGjm7db74uUcPmKDciyw}`} alt='' />
            :
            null
          }

          {/*
          <FaceRecognition/>*/}
      </div>
  );
}
}

export default App;