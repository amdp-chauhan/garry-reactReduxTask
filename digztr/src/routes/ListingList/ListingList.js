import React, { Component } from 'react';
import './ListingList.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import $ from 'jquery';

import * as ListingActions from '../../actions/Listing';

class ListHeader extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          54321 Real Estate & Proper for Sale
          6 in Arena District, OH
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <select className="form-control"></select>
          </div>
        </div>
        <div className="col-md-4">
          Map List
        </div>
      </div>
    )
  }
}

class ListBody extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-sm-12 col-md-9">

        </div>
      </div>
    );
  }
}

class ListingList extends Component {
  render(){
    return (
      <div id="list-view" className="container">
        <ListHeader />
        <ListBody />
      </div>
    );
  }
}

export default connect(state => ({
  listings: state.Listing
}))(ListingList);
