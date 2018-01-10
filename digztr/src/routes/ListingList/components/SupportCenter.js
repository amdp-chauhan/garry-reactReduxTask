import React,{Component} from 'react';

export default class SupportCenter extends Component {

    render() {
        return (
          <div id="section-list-13">
            <div className="content">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <h5>Support Center</h5>
                  <div className="row">
                    <div className="col-xs-2">
                      <img src="svg/smartphone.svg" alt="" />
                    </div>
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-8">
                      <p>(+44) 123 457</p>
                      <p>(+44) 123 457</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-2">
                      <img src="svg/send.svg" alt="" />
                    </div>
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-8">
                      <p>Info@digztr.com</p>
                      <p>Contact@digztr.com</p>
                    </div>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <h5>Browse Homes</h5>
                  <ul>
                    <li>New York</li>
                    <li>Texas</li>
                    <li>California</li>
                    <li>Florida</li>
                    <li>Illinois</li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <h5>Real Estate</h5>
                  <ul>
                    <li>Austin real estate</li>
                    <li>Atlanta real estate</li>
                    <li>Albuquerque real estate</li>
                    <li>Browse all homes</li>
                    <li>Baltimore real estate</li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <h5>Rental</h5>
                  <ul>
                    <li>Rental Buildings</li>
                    <li>Atlanta apratments for rent</li>
                    <li>Austin apartments for rent</li>
                    <li>Baltimore apartments for rent</li>
                    <li>Boston apartments for rent</li>
                  </ul>
                </div>
            </div>
            </div>
          </div>
        );
    }
}
