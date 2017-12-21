import React, { Component } from 'react';
import heart from '../../../assets/svg/heart.svg';

class DetailPrice extends Component {
  render(){
    return(
      <div className="col-sm-12 col-md-4">
        <div className="" style={{padding: "0 20px"}}>
          <h5 className="orange-text text-center">$ {this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className="violet-text">For Sale</span></h5>
          <button type="button" className="btn btn-block btn-overwrite" style={{marginTop:"20px"}} name="button">Est.Mortgage $2,456/mo</button>
            <div className="wishlist">
              <img src={heart} alt="heart" /> <span> Save to wish list</span>
            </div>
          </div>
        </div>
    );

  }
}

export default DetailPrice;
