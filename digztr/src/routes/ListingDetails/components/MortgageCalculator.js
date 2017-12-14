import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import Slider from 'bootstrap-slider';

import * as MortgageCalculatorAction from '../../../actions/MortgageCalculator';

class MortgageChart extends Component {
  componentDidMount() {
    new Chart(document.getElementById("doughnut-chart"), {
      type: 'doughnut',
      data: {
        labels: ["PMI", "Principle Interest", "Insurance", "Tax"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#ffc78c", "#f57f1d","#142f88","#4ea8f6"],
            data: [784,5267,500,2478]
          }
        ]
      },
      options: {
        legend: { display: false },
        cutoutPercentage: 70
      }
    });
  }
  render(){
    return (
      <div class="col-xs-12 col-sm-6">

        <div style={{width: "100%", height: "40px", position: "absolute", top: "50%", left: "0", marginTop: "-100px", lineHeight: "19px", textAlign: "center", zIndex: "5"}}>
          <b > Estimate Payment </b> <br /><br />
          <b style={{fontSize: "40px",fontWeight:"lighter"}}>${this.props.payment}</b>
        </div>

        <canvas id="doughnut-chart" class="" width="800" height="450"></canvas>
        <br />

        <ul>
          <li style={{color: "#ff3700"}}><b style={{color: "#ff3700"}}> Principle Interest: ${this.props.interest}</b></li>
          <li style={{color: "#273d86"}}><b style={{color: "#273d86"}}> Insurance: ${this.props.insurance}</b></li>
          <li style={{color: "#a7d3fa"}}><b style={{color: "#a7d3fa"}}> Tax: ${this.props.tax}</b></li>
          <li style={{color: "#ffd6b0"}}><b style={{color: "#ffd6b0"}}> PMI: $225</b></li>
        </ul>
      </div>
    );
  }
}

class MortgageSliders extends Component {
  handlePaymentUpdate(){
  }
  handleDownpaymentSlider(newVal) {
    this.props.dispatch(MortgageCalculatorAction.calculate({
      payment: this.props.payment,
      downpayment: newVal,
      loan_term: this.props.loan_term,
      interest_rate: this.props.interest_rate,
      homeowner_insurance: this.props.homeowner_insurance,
      property_tax: this.props.property_tax
    }));
  }
  handleTermSlider(newVal){
    this.props.dispatch(MortgageCalculatorAction.calculate({
      payment: this.props.payment,
      downpayment: this.props.downpayment,
      loan_term: newVal,
      interest_rate: this.props.interest_rate,
      homeowner_insurance: this.props.homeowner_insurance,
      property_tax: this.props.property_tax
    }));
  }
  handleInterestSlider(newVal){
    this.props.dispatch(MortgageCalculatorAction.calculate({
      payment: this.props.payment,
      downpayment: this.props.downpayment,
      loan_term: this.props.loan_term,
      interest_rate: newVal,
      homeowner_insurance: this.props.homeowner_insurance,
      property_tax: this.props.property_tax
    }));
  }
  handleInsurnaceSlider(newVal){
    this.props.dispatch(MortgageCalculatorAction.calculate({
      payment: this.props.payment,
      downpayment: this.props.downpayment,
      loan_term: this.props.loan_term,
      interest_rate: this.props.interest_rate,
      homeowner_insurance: newVal,
      property_tax: this.props.property_tax
    }));
  }
  handleTaxSlider(newVal){
    this.props.dispatch(MortgageCalculatorAction.calculate({
      payment: this.props.payment,
      downpayment: this.props.downpayment,
      loan_term: this.props.loan_term,
      interest_rate: this.props.interest_rate,
      homeowner_insurance: this.props.homeowner_insurance,
      property_tax: newVal
    }));
  }
  componentDidMount() {
    new Slider("#a",{});
    new Slider("#b",{}).on("change", (value) => {
      this.handleDownpaymentSlider(value.newValue);
    });
    new Slider("#c",{}).on("change", (value) => {
      this.handleTermSlider(value.newValue);
    });
    new Slider("#d",{}).on("change", (value) => {
      this.handleInterestSlider(value.newValue);
    });
    new Slider("#e",{}).on("change", (value) => {
      this.handleInsurnaceSlider(value.newValue);
    });
    new Slider("#f",{}).on("change", (value) => {
      this.handleTaxSlider(value.newValue);
    });
  }
  render(){
    return (
      <div class="col-xs-12  col-sm-6">
        <p> <b>Loan Amount</b></p>
        <input type="text" value="" data-slider-min="0" data-slider-max="255" data-slider-step="1" data-slider-value="128" data-slider-id="a-C" id="a" data-slider-tooltip="hide" data-slider-handle="square" />
        <b>$431,910</b>
          <br /><br />
          <p> <b>Down Payment</b></p>
          <input type="text" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value={this.props.downpayment} data-slider-id="b-C" id="b" data-slider-tooltip="hide" data-slider-handle="square" />
          <b>{this.props.downpayment}%</b>
          <br /><br />
          <p> <b>Loan Term</b></p>
          <input type="text" value="" data-slider-min="10" data-slider-max="30" data-slider-step="5" data-slider-value={this.props.loan_term} data-slider-id="c-C" id="c" data-slider-tooltip="hide" data-slider-handle="square" />
          <b>${this.props.loan_term} years</b>
          <br /><br />
          <p> <b>Interest Rate</b></p>
          <input type="text" value="" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value={this.props.interest_rate} data-slider-id="d-C" id="d" data-slider-tooltip="hide" data-slider-handle="square" />
          <b>{this.props.interest_rate}%</b>
          <br /><br />
          <p> <b>Homeowner Insurance</b></p>
          <input type="text" value="" data-slider-min="0" data-slider-max="255" data-slider-step="1" data-slider-value={this.props.homeowner_insurance} data-slider-id="e-C" id="e" data-slider-tooltip="hide" data-slider-handle="square" />
          <b>${this.props.homeowner_insurance}</b>
          <br /><br />
          <p> <b>Property Tax</b></p>
          <input type="text" value="" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value={this.props.property_tax} data-slider-id="f-C" id="f" data-slider-tooltip="hide" data-slider-handle="square" />
          <b>{this.props.property_tax}%</b>
          <br /><br />
      </div>
    );
  }
}

class MortgageCalculator extends Component {
  handlePaymentUpdate(value){
    this.state.payment+=value;
  }
  render() {
    return (
      <div id="section-09" class="section">
        <h5 class="sec-sub-title violet-text">Mortgage Calculator</h5>
        <p> <strong> With a current price of $479, 900 and a mortgage rate of  4.0%, someone purchasing 37  Meredith Road, 1217 - Piscataway, NJ, 08854 could expect to have a monthly payment of $3,409. This assumes a 10% down payment of $47,990, a high credit score and a 21 year fixed-rate mortgage. </strong></p>
        <br /><br />
        <div class="row">
          <MortgageChart
            payment={this.props.mortgage.payment}
            interest={this.props.mortgage.payment*(this.props.mortgage.interest_rate/100)}
            insurance={this.props.mortgage.homeowner_insurance}
            tax={this.props.mortgage.payment*(this.props.mortgage.property_tax/100)}
            />
          <MortgageSliders
            {...this.props.mortgage}
            dispatch={this.props.dispatch}
            />
        </div>
      </div>
    );

  }
}

export default connect(state => ({
  mortgage: state.MortgageCalculator
}))(MortgageCalculator);
// export default MortgageCalculator;
