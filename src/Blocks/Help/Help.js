import React , { Component} from 'react';

import "./Help.css";

import 'bootstrap/dist/css/bootstrap.min.css';  



export default class Help extends Component {

	
		

	render(){

		return (

			<section>

				<div className="carouselWrapper col-lg-12">
					<div className="heading5">How Can We Help?</div>
					<div className="heading6">Detect risks in real time</div>
					<div class="container1 col-lg-5 col-lg-offset-2">
						
						<div className="row">
							<div id="myCarousel1"  class="carousel slide " data-ride="carousel">
						   
						   <ol class="carousel-indicators">
						      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						      <li data-target="#myCarousel" data-slide-to="1"></li>
						      <li data-target="#myCarousel" data-slide-to="2"></li>
						    </ol>

						  
						    <div class="carousel-inner">
						      <div class="item active">
						        
						        <i className="fa fa-circle dotIcon"></i>
						        <div class="one">01</div>
						        <div className="mainHeading">Vandalism</div>
						        <div className="subOne">Raven Works Seamlessly With your <br/> existing CCTV Cameras.</div>
						        <button className="btn  newButton">Read More</button>
						      </div>

						    <div class="item">
						        
						      <i className="fa fa-circle dotIcon"></i>
						        <div class="one">02</div>
						        <div className="mainHeading">Accidents</div>
						        <div className="subOne">Raven Works Seamlessly With your <br/> existing CCTV Cameras.</div>
						        <button className="btn  newButton">Read More</button>
						      </div>
						    
						    {/* <div class="item">
						        
						       <i className="fa fa-circle dotIcon"></i>
						        <div class="one">01</div>
						        <div className="mainHeading">Vandalism</div>
						        <div className="subOne">Raven Works Seamlessly With your <br/> existing CCTV Cameras.</div>
						        <button className="btn  newButton">Read More</button>
						      </div>*/}
						    </div>

						  
						    
				  		</div>
						</div>  
						
					</div>

					<div class="playButtonBox">
						<i className="fa fa-play playIcon"></i>
					</div>


					<div class="container2 col-lg-3">
					
						<div className="row">
							<div id="myCarousel2" class="carousel slide" data-ride="carousel">
						   
						    <ol class="carousel-indicators">
						      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						      <li data-target="#myCarousel" data-slide-to="1"></li>
						      <li data-target="#myCarousel" data-slide-to="2"></li>
						    </ol>

						  
						    <div class="carousel-inner">
						      <div class="item active">
						      
						       <i className="fa fa-circle dotIcon1"></i>
						        <div class="one1">02</div>
						        <div className="mainHeading1">Accidents</div>
						        <div className="subOne1">Raven Works Seamlessly With your existing CCTV Cameras.</div>
						        <button className="btn  newButton1">Read More</button>
						      </div>

						      <div class="item">
						      
						       <i className="fa fa-circle dotIcon1"></i>
						        <div class="one1">01</div>
						        <div className="mainHeading1">Vandalism</div>
						        <div className="subOne1">Raven Works Seamlessly With your existing CCTV Cameras.</div>
						        <button className="btn  newButton1">Read More</button>
						      </div>
						    
						      {/*<div class="item">
						      
						       <i className="fa fa-circle dotIcon1"></i>
						        <div class="one1">01</div>
						        <div className="mainHeading1">Accidents</div>
						        <div className="subOne1">Raven Works Seamlessly With your existing CCTV Cameras.</div>
						        <button className="btn  newButton1">Read More</button>
						      </div>*/}
						    </div>

						  	<a class="left carousel-control" href="#myCarousel2" data-slide="prev">
							    <a class="left carousel-control" href="#myCarousel1" data-slide="prev">
							    <span class="glyphicon glyphicon-arrow-right rightIcon"></span>
							      
							      <span class="sr-only">Previous</span>
							    </a>
						    </a>
						    <a class="left carousel-control" href="#myCarousel2" data-slide="next">
							    <a class="right carousel-control" href="#myCarousel1" data-slide="next">
							    	<span class="glyphicon glyphicon-arrow-left rightIcon1"></span>
						     
						      	<span class="sr-only">Next</span>
				    		</a>
				    		</a>
				  		</div>
						</div>  
						
					</div>

				</div>
					
				

			</section>

			)
	}
}