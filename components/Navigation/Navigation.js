import React from 'react';
import "./Navigation.css";

const Navigation = () => {
    return(

     <section>   
        <div class="cover">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center">
                        <p class="mb0 phone pl-md-2">
                            <a href="#" class="font mr3">
                                <i class="fa fa-phone mr1"></i>
                                +63 917 876 7789
                            </a>
                            <a class ='font' href="#"> <i class="fa fa-paper-plane mr1"></i>
                                johanchanpl@gmail.com
                            </a>
                        </p>
                    </div>
                    <div class="col-md-6 d-flex justify-content-md-end">
                        <div class= "social-icon mr4">
                            <p class="mb0 d-flex">
                                <a href="#" class="d-flex align-items-center justify-content-center">
                                    <i class="fa fa-facebook-square" aria-hidden="true" ></i>
                                </a>

                                <a href="#" class="d-flex align-items-center justify-content-center">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>

                                <a href="#" class="d-flex align-items-center justify-content-center">
                                    <i class="fa fa-twitter-square"></i>
                                </a>
                            </p>
                        </div>
                        
                        <div class ="font reg">
                            <a href="#" class="mr3 mb0">Sign Up</a>
                            <a href="#"> Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <nav class="navbar navbar-expand-lg main-navbar bg-color main-navbar-color" id="main-navbar">
                <div class="container">
                    <a class="navbar-brand" href="#"> Findr</a>
                    <div class="order-lg-last btn-group">
                        <i class ="fa fa-cutlery fa-2x"></i>
                        <i class="fa fa-glass fa-2x ml3"></i>
                    </div>
                    
                    <button class="navbar-toggler" type="button" 
                        data-bs-toggle="collapse"
                        data-bs-target="#myNav" 
                        aria-controls="myNav" aria-expanded="false" aria-label='Toggle navigation'>
                    <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id= "myNav" >
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="#" class="font nav-link">About Us</a>
                            </li>
                            <li class="nav-item">   
                                <a href="#" class="font nav-link">Donate</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </section>
    
    
    );
}



export default Navigation;