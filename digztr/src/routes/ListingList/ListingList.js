import React, { Component } from 'react';
import './ListingList.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as ListingsActions from '../../actions/Listings';

import Subscribe from './components/Subscribe';
import SupportCenter from './components/SupportCenter';
import SortBy from './components/SortBy';
import FilterSearch from './components/FilterSearch';
import HomeListItem from './components/HomeListItem';


class ListingList extends Component {
	componentDidMount(){
		this.props.dispatch(ListingsActions.load())
	}
	render(){
		// console.log(this.props.listings.slice(0,3));
		return (
				<div id="list-view">
					<SortBy />

					<div className="row section-margin">
						<div className="col-sm-12 col-md-9">
							<HomeListItem  homes={this.props.listings.slice(0,3)}/>
						</div>
						<div className="col-sm-12 col-md-3">
							<FilterSearch />
						</div>
					</div>

					<Subscribe />

					<SupportCenter />
				</div>
		);
	}
}

export default connect(state => ({
	listings: state.Listings
}))(ListingList);
