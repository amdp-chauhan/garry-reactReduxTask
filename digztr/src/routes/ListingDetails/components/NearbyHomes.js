import React,{Component} from 'react';

class NearbyHome extends Component {
  renderMeta() {
    return (
      this.props.home.meta.map((item,index) => {
        {console.log(item)}
        return (

          <div className="col-xs-4" key={index}>
            <img src={require(`../../../assets/svg/${item.image}`)} alt=""  width="20px" /><b> {item.value}</b>
          </div>
        );
      })
    )
  }
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <div className="card-img-container">
            <div className="caption">
              <span className="caption-blue-box top-left" >
                  For Sale
              </span>
              <a href="#" className="caption-heart top-right"> <img src={require("../../../assets/svg/heart-white.svg")} alt="" /> </a>
            </div>
            <img src={require("../../../assets/jpeg/01.jpg")} alt="" />
          </div>
          <div className="row card-content">
            <div className="col-sm-7">
              <p>{this.props.home.name}</p>
              <img src={require("../../../assets/svg/active-pin.svg")} alt=""  width="20px" /> <span style={{marginLeft: "10px"}}>{this.props.home.address}</span>
            </div>
            <div className="col-sm-5">
              <h5 className="orange-text" style={{marginTop:"20px"}}>${this.props.home.price}</h5>
            </div>
          </div>
          <hr className="no-pad" style={{borderTop: "dotted 1px", margin: "5px 0"}} />
          <div className="row card-content">
            {this.renderMeta()}
          </div>
          <hr className="no-pad" style={{borderTop: "dotted 1px", margin: "5px 0"}} />
          <div className="card-footer">
            <button type="button" className="btn btn-default" name="button">View detail</button>
          </div>
        </div>
      </div>
    );
  }
}

export default class NearbyHomes extends Component {
    renderList(){
      return (
        this.props.homes.map((item,index) => {
          return (
            <NearbyHome
              key={index}
              home={item}
              />
          )
        })
      );
    }
    render() {
      console.log(this.props);
        return (
          <div id="section-11" className="row">
            <h5 className="sec-sub-title text-center text-uppercase violet-text">Near By Homes</h5>
            <div className="container">
              <div className="row text-center">
                {this.renderList()}
              </div>
              <div className="row text-center">
                  <button type="button" className="btn btn-default btn-overwrite" style={{padding: "10px 20px"}} name="button">View All 1234 Properties</button>
              </div>
            </div>
          </div>
        );
    }
}
