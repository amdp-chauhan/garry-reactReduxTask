import React,{Component} from 'react';
import Slider from 'bootstrap-slider';

export default class FilterSearch extends Component {

	render() {
			return (
				<div id="section-list-03">
					<div className="content">
						<div className="row">
							<div className="card">
					            <div className="card-title text-center violet-03-bg">
					              <h6>FILTER YOUR SEARCH</h6>
					            </div>
					            <div className="card-content">
					              <h6 className="blue-text">LOCATION</h6>

					                <input
					                  type="text"
					                  className="form-control"
					                  placeholder="Enter zipcode,address, etc."
					                  />

			                  		<h6>Radius</h6>

			                  		<select name="">
										<option value="">None:</option>
									</select>

									<h6 className="blue-text">PROPERTY TYPE</h6>
									<select name="">
										<option value="">Villa</option>
										<option value="">Apartment</option>
										<option value="">Town House</option>
									</select>

									<h6 className="blue-text">LIST TYPE</h6>
									<label className="container">All
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>

									<label className="container">By Agent (3)
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>

									<label className="container">By Owner (3)
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>

									<h6 className="blue-text">PRICE RANGE</h6>

							        <b style={{marginLeft:"0px"}}>5%</b>
							        <b style={{marginRight:"0px"}}>40%</b>

							        <div className="row">
							        <input type="text" value="" data-slider-min="0" data-slider-max="255" data-slider-step="1" data-slider-value="128" data-slider-id="down-payment-slider-C" id="down-payment-slider" data-slider-tooltip="hide" data-slider-handle="square"/>
							        </div>


									<label className="container">Any Price
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>

									<h6 className="blue-text">PROPERTY ATTRIBUTES</h6>

									<div className="row">
										<div className="col-md-6">
											<h6>Lot Size</h6>
											<div className="violet-text">
												<select name="">
													<option value="">Any</option>
												</select>
												<select name="">
													<option value="">Bedrooms</option>
												</select>
												<select name="">
													<option value="">Garage</option>
												</select>
											</div>
										</div>

										<div className="col-md-6">
											<h6>House Age</h6>
											<div className="violet-text">
												<select name="">
													<option value="">Any</option>
												</select>
												<select name="">
													<option value="">Bathrooms</option>
												</select>
												<select name="">
													<option value="">Store</option>
												</select>
											</div>
										</div>
									</div>
					            </div>
					          </div>

						</div>

					</div>
				</div>
			);
	}
}
