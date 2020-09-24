import React , { Component} from 'react';

import "./DetectPotential.css";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class DetectPotential extends Component {

	render() {

		
		return(


			<section>
				<div className="detectWrapper col-lg-12">
					<div className="heading4">Detect potential risks in real time</div>
					<div className="underline4"></div>
					<div className="carouselBoxWrapper col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1">		
					<div className='col-lg-12 '>
						<div className="row">
							<OwlCarousel className="owl-carousel owlCarousel " >


							    <div class="item1 subImg ">
							    	<img src="images/AdobeStock_1.jpeg" />
							    </div>
							    <div class="item1 subImg ">
							    	<img src="images/AdobeStock_2.jpeg"/>
							    </div>
							    <div class="item1 subImg  ">
							    	<img src="images/AdobeStock_3.jpeg" />
							    </div>
							    <div class="item1 subImg ">
							    	<img src="images/BeFunky-collage-scaled.jpg"  />
							    </div>   
						
							</OwlCarousel>
    
							

						</div>
						
					</div>
						

									
							


				</div>	
					
				</div>
				

			</section>


			)
	}
}