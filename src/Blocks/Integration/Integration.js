import React , { Component} from 'react';

import "./Integration.css";

export default class Integration extends Component{
	render() {
		return(

			<section>
				<div className="IntegrationWrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="row">
						<div className="ImagePart col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="imgBox col-lg-">
								<img src="/images/AdobeStock_1.jpeg"/>
							</div>
						</div>
						<div className="TextPart col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="intBox">
								<h4 className="heading2">Integration</h4>
								<p className="para2">Integrates with your notification systems(mail,<br/> sms,buzzer etc)</p>

							</div>
						</div>
					</div>

				</div>
			</section>


			)
	}

}