import React, { Component } from 'react';
import './ListingDetails.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as ListingActions from '../../actions/Listing';

class ListingList extends Component {
  render(){
    return (

    );
  }
}

export default connect(state => ({
  listings: state.Listing
}))(ListingList);
