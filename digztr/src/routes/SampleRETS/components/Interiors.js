import React, { Component } from 'react';

class Interiors extends Component {
  renderInterior() {
    return (
      this.props.interiors.map((item,index) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
            <p>
              {item.type} <br />
              <div style={{whiteSpace: "pre"}}>
                {item.values.map(item => {return `${item} \n`})}
              </div>
            </p>
          </div>
        )
      })
    );
  }
  render(){
    return (
      <div id="section-05" className="section">
        <h5 className="sec-title violet-text">Interior Features</h5>
        <div className="row interior-features-content">
          {this.renderInterior()}
        </div>

        <h5 className="sec-sub-secondary-title violet-text">Construction</h5>
        <div className="row interior-features-content">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <p>
              Type and Style <br />
              Structure type: Tudor <br />
              Single Family
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Interiors;
