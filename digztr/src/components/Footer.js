import React,{Component} from 'react';

export default class Footer extends Component {

    render() {
        return (
          <div id="footer" class="row">
            <div class="text-center footer-link" style={{marginBottom: "20px"}}>
              <a href="#">Buy</a>
              <a href="#">Rent</a>
              <a href="#">Sell</a>
              <a href="#">Mortgages</a>
              <a href="#">Agent Finder</a>
              <a href="#">Home Design</a>
              <a href="#">More</a>
              <a href="#">Term and Condition</a>
              <a href="#">Privacy Policy</a>
            </div>
            <img src="jpeg/gray-dot.jpg" width="80%" height="1px;" style={{margin: "0 10%"}} alt="" />
            <div class="row copyright-text">
              <div class="col-xs-12 col-sm-6 text-right">
                <span>(C) 2017 Digztr All Rights Reserved</span>
              </div>
              <div class="col-xs-12 col-sm-6 text-left social">
                <a href="#facebook"><img src={require("../assets/svg/social/facebook.svg")} alt="" /></a>
                <a href="#twitter"><img src={require("../assets/svg/social/twitter.svg")} alt="" /></a>
                <a href="#linkedin"><img src={require("../assets/svg/social/linked-in.svg")} alt="" /></a>
                <a href="#googleplus"><img src={require("../assets/svg/social/google-plus.svg")} alt="" /></a>
              </div>
            </div>
          </div>
        );
    }
}
