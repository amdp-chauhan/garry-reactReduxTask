import React, { Component } from 'react';
import Chart from 'chart.js';

class RentValue extends Component {
  componentDidMount() {
    new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [{
            data: [8400,7500,7750,8000,7000,7900,6000,9000,8100,8050,10145],
            borderColor: "#3e95cd",
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "#ff7f25",
            pointHoverBorderColor: "#ff7f25"
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        },
        legend: { display: false },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            title: function(tooltipItems, data) {
              return '';
            },
            label: function(tooltipItem, data) {
              var datasetLabel = '';
              var label = data.labels[tooltipItem.index];
              return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            },
            label: function (t, d) {
              if (t.datasetIndex === 0) {
                return '$ ' + t.yLabel.toFixed(2);
              } else if (t.datasetIndex === 1) {
                if (t.yLabel.toString().length === 9) {
                  return Math.round(+t.yLabel.toString().replace(/(\d{3})(.*)/, '$1.$2')) + 'M';
                } else return Math.round(+t.yLabel.toString().replace(/(\d{2})(.*)/, '$1.$2')) + 'M';
              }
            }
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display:false
            },
            ticks: {
              min: 0
            }
          }],
          yAxes: [{
            gridLines: {
              display:true
            },
            ticks:{
              min: 5000,
              steps: 1000,
              stepValue: 1000
            }
          }]
        }

      }
    });
  }
  render(){
    return(
      <div id="section-07" className="section">
        <h5 className="sec-title violet-text">Rent Value Estimator</h5>
        <canvas id="line-chart" width="300" height="100"></canvas>
        <span className="orange-text zent-value">Estimate Zent Value: $10,145/month</span>
      </div>
    );
  }
}

class ValueEstimator extends Component {
  componentDidMount() {
    new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        labels: ["Lowest Price", "This Home Price", "Digztr Estimate", "Highest Price"],
        datasets: [{
            label: "01",
            type: "line",
            borderColor: "#ddd",
            data: [408,547,500,734],
            fill: false,
            pointRadius: 0
          }, {
            label: "01",
            type: "bar",
            backgroundColor: "#a7d3fa",
            data: [408,547,675,734],
          }, {
            label: "02",
            type: "bar",
            backgroundColor: "#4fa8f5",
            data: [0,0,783,235]
          }, {
            label: "03",
            type: "bar",
            backgroundColor: "#85c2f8",
            data: [408,0,0,0],
          }, {
            label: "04",
            type: "bar",
            backgroundColor: "#4fa8f5",
            data: [133,0,0,100]
          }, {
            label: "05",
            type: "bar",
            backgroundColor: "#85c2f8",
            data: [408,0,0,734],
          }, {
            label: "06",
            type: "bar",
            backgroundColor: "#a7d3fa",
            data: [0,221,783,300]
          }
        ]
      },
      options: {

        legend: { display: false },
        scales: {
          xAxes: [{
            gridLines: {
              display:true
            }
          }],
          yAxes: [{
            gridLines: {
              display:false
            },
            ticks: {
              display: false
            }
          }]
        }
      },
      toolTipTemplate: "<%if (label){%><%=label.long%}>: <%}%><%= value %>"
    });
  }
  render(){
    return (
      <div>
        <div id="section-06" className="section">
            <h5 className="sec-title violet-text">Home Value Estimator</h5>
            <div className="row hidden-xs" style={{margin: "0 4.6vh"}}>
              <div className="col-xs-3 text-center">
                <h5>Exceptional Price</h5>
                <span>Less than $11 mil</span>
              </div>
              <div className="col-xs-3 text-center">
                <h5>Great Price</h5>
                <span>Less than $16.5 mil</span>
              </div>
              <div className="col-xs-3 text-center">
                <h5>Good Price</h5>
                <span>Less than $19 mil</span>
              </div>
              <div className="col-xs-3 text-center" >
                <h5>Above Market</h5>
                <span>$23mil or more</span>
              </div>
            </div>
            <canvas id="mixed-chart" width="300" height="100"></canvas>
            <div className="row" style={{margin: "0 4.6vh"}}>
              <input type="radio" name="loc_nat" checked /> Local<br />
              <input type="radio" name="loc_nat" /> Nation<br />
            </div>
            <div className="row chart-text hidden-xs hidden-sm">
              <div className="col-sm-4 text-center">
                <p>This Home Price: $ 15 MIL</p>
              </div>
              <div className="col-sm-4 text-center">
                <p>Digztr Estimate Price: $ 20 MIL</p>
              </div>
              <div className="col-sm-4 text-center">
                <p>Price Range: $ 8 MIL - $ 23 MIL</p>
              </div>
            </div>
            <div className="row text-center feature-text">
              <p>This home price is 25% below Digztr Estimate Price. This is very Great Price</p>
            </div>
          </div>


        <RentValue />

      </div>

    );
  }
}

export default ValueEstimator;
