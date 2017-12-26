import React, { Component } from 'react';
// import $ from 'jquery';
import Slider from 'bootstrap-slider';

class CreditScore extends Component {
  render(){
    return(
      <div className="col-xs-12 col-sm-6 margin-bottom-20">
        <p>Credit score: 710 - Great</p>
        <b style={{marginRight:"10px"}}>600+</b>
        <input type="text" value="" data-slider-min="0" data-slider-max="255" data-slider-step="1" data-slider-value="128" data-slider-id="credit-score-slider-C" id="credit-score-slider" data-slider-tooltip="hide" data-slider-handle="square" />
        <b style={{marginRight:"10px"}}>740+</b>
        <p>Product: 30 Year Fixed Mortgage, All Points</p>
      </div>
    );
  }
}

class DownPayment extends Component {
  render(){
    return(
      <div className="col-xs-12 col-sm-6 margin-bottom-20">
        <p>Down payment: 30%</p>
        <b style={{marginRight:"10px"}}>5%</b>
        <input type="text" value="" data-slider-min="0" data-slider-max="255" data-slider-step="1" data-slider-value="128" data-slider-id="down-payment-slider-C" id="down-payment-slider" data-slider-tooltip="hide" data-slider-handle="square"/>
        <b style={{marginLeft:"10px"}}>40%</b>

        <p>Loan Amount: $383,920</p>
      </div>
    );
  }
}

class MortgageCalculator extends Component {
  componentDidMount(){
    let slider1 = new Slider('#credit-score-slider',{});
    let slider2 = new Slider('#down-payment-slider',{});
  }
  render(){
    return (
      <div id="section-08" className="section">
            <h5 className="sec-sub-title violet-text">Mortgage Rate Calculator</h5>
            <div className="row">
              <CreditScore />
              <DownPayment />
              <div id="RGB">
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-2 margin-bottom-20">
                <b className="violet-text">Garden state home loan Inc</b>
              </div>
              <div className="col-xs-6 col-sm-2 margin-bottom-20">
                <b className="violet-text">3.625% APR</b><br />
                <span>Jun 6</span>
              </div>
              <div className="col-xs-6 col-sm-2 margin-bottom-20">
                <b className="violet-text">3.625% Rate</b><br />
                <span>0 Points</span><br />
                <span>30 Rate Lock</span>
              </div>
              <div className="col-xs-6 col-sm-2 margin-bottom-20">
                <b className="violet-text">$1,751/mo</b><br />
                <b className="violet-text">$0 Fees</b><br />
                <span>More Details</span>
              </div>
              <div className="col-xs-6 col-sm-2 margin-bottom-20">
                <b className="violet-text">(877) 430-1109</b><br />
                <span>(Toll-free, no obligation)</span>
              </div>
              <div className="col-xs-6 col-sm-2 margin-bottom-20">
                <button type="button" className="btn btn-block btn-overwrite" name="button">NEXT</button>
              </div>
            </div>
            <div className="row">
              <a href="#"  style={{marginLeft:"10px"}}> <img src={require("../../../assets/svg/add.svg")} alt="" /> <b className="orange-text" style={{marginLeft:"10px"}}>Add more lender</b> </a>
            </div>
          </div>
    );
  }
}

export default MortgageCalculator;
