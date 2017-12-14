import React, { Component } from 'react';

class Fact extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 fact">
        <div className="row">
          <div className="col-xs-3 text-right" style={{padding:"0px !important"}}>
            <img src={require(`../../../assets/svg/${this.props.fact.img}`)} alt="" />
          </div>
          <div className="col-xs-9 text-left fact-class">
            <h5>{this.props.fact.type}</h5>
            <span>{this.props.fact.value}</span>
          </div>
        </div>
      </div>
    )
  }
}

class Facts extends Component {
  renderList() {
    return (
      this.props.facts.map((item,index) => {
        return (
          <Fact
            key={index}
            fact={item}
            />
        );
      })
    )
  }
  render(){
    return (
      <div id="section-04" className="section">
            <h5 className="sec-title violet-text">Facts and Features</h5>
            <div className="row">
              {this.renderList()}
            </div>
          </div>
    );
  }
}

export default Facts;
