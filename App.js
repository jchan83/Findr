import './App.css';
import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 



  class App extends Component {
   

    render() {
      return (
        <div className="App">
          <LandingPage test={this.state}/>
          
        </div>
        );
        }    
    }
        
    export default App;

