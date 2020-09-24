import React     		from 'react';


import Dashboard 		from './Blocks/Dashboard/Dashboard.js';
import Integration 		from './Blocks/Integration/Integration.js';
import DetectPotential 	from './Blocks/DetectPotential/DetectPotential.js';
import Help 			from './Blocks/Help/Help.js';

import './App.css';

import fontawesome from 'font-awesome/css/font-awesome.min.css';
import bootstrap   from 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <div className ="container-flex">
    
    
    		 <Help/>
    		<DetectPotential/>
    	<Dashboard/>
    	<Integration/>
    	

      
    </div>
  );
}

export default App;
