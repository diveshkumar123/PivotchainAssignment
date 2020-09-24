import React , { Component} from 'react';

import "./Dashboard.css";
export default class Dashboard extends Component {
	render() {
		return(

			<section>
				<div className="DashboardWrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="row">
						<h2 className="heading">Situation Dashboard</h2>
						<div className="underline"></div>
						<div className="mainBox col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1">
							<div className="row">
								<div className="box1 col-lg-6">
									<div className="subBox1">
										<div className="iconBox">
											<i className="fa fa-search Icon1"></i>
										</div>
										<h4 className="heading1">Spot</h4>
										<p className="para1">Spot trends for crime/abnormal events across geography over time.</p>
									</div>
								</div>
								<div className="box1 col-lg-6">
									<div className="subBox1">
										<div className="iconBox">
											<i className="fa fa-wifi Icon3"></i>
										</div>
										<h4 className="heading1">Hotspots</h4>
										<p className="para1">Detect risk patterns an <br/> hotspots.</p>
									</div>
								</div>
								<div className="box1 col-lg-6">
									<div className="subBox1">
										<div className="iconBox">
											<i className="fa fa-bell-o Icon2"></i>
										</div>
										<h4 className="heading1">Live alerts</h4>
										<p className="para1">Live alerts count for public safety <br/> events.</p>
									</div>
								</div>
								<div className="box1 col-lg-6">
									<div className="subBox1">
										<div className="iconBox">
											<i className="fa fa-clock-o  Icon4"></i>
										</div>
										<h4 className="heading1">Response Time</h4>
										<p className="para1">Predective response time <br/> recommendation for public safety <br/> events.</p>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</section>




			)
	}
}