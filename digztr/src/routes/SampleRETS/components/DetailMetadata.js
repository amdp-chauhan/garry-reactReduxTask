import React, { Component } from 'react';
import dotOrange from '../../../assets/jpeg/dot-orange.jpg';

class DetailMetadata extends Component {
  renderList() {
      return (
        this.props.meta.map((item,index) => {
          return (
            <div className="col-xs-6 col-sm-3 margin-bottom-20" key={index} >
              <p className="sec-title">{ item.type }</p>
              <span className="sec-desc">{ item.value }</span>
              <br />
              <img src={dotOrange} alt="" width={"25px"} height={"3px"} />
            </div>
          )
        })
      )

  }
  render() {
    return(
      <div className="col-sm-12 col-md-8 col-lg-7">
        <h5 className="violet-text">{this.props.title}</h5>
        <div className="row" style={{padding: "0 15px", marginTop: "40px"}}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default DetailMetadata;
