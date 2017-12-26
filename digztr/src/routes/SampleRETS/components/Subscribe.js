import React,{Component} from 'react';

export default class Subscribe extends Component {
    render() {
        return (
          <div id="section-12">
            <div class="content row">
              <div class="row">
                <div class="col-xs-12 col-sm-4 text-right">
                  <h4>Never miss new listings</h4>
                  <span>Be the first to know about new things</span>
                </div>
                <div class="col-xs-12 col-sm-4 in-email">
                  <br />
                  <input type="email" class="btn" name="" value="" placeholder="Enter your email" />
                  <img src={require("../../../assets/jpeg/light-orange.jpg")} alt="" width="100%" height="2px" />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <button type="button" name="button" class="btn btn-default btn-subscribe">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
