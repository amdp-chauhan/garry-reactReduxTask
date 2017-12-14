import React, { Component } from 'react';

class Feature extends Component {
  render(){
    return (
      <div className="col-sm-6 col-md-3 text-center house-feature">
        <img className="row " src={require(`../../../assets/svg/${this.props.feature.img.file}`)} alt="" width={this.props.feature.img.width} />
        <span className="row">{this.props.feature.name}: {this.props.feature.value}</span>
        <img src={require("../../../assets/svg/fire.svg")} alt="" width="30px" />
        <b className="orange-text">Hottest Size</b>
      </div>
    )
  }
}

class HighlightFeatures extends Component {
  renderList() {
    return (
      this.props.features.map((item,index) => {
        return (
          <Feature
            key={index}
            feature={item}
            />
        )
      })
    );
  }
  render(){
    return (
      <div id="section-03" className="section">
        <h5 className="sec-title violet-text">High Light Features</h5>
        <div className="row">
          {this.renderList()}
        </div>
        <div className="row text-center feature-text">
          <p>This home has {this.props.features.length}/5 hottest features!  It will be sold fast</p>
        </div>
      </div>
    )
  }
}

export default HighlightFeatures;
