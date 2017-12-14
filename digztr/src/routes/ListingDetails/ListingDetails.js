import React, { Component } from 'react';
import './ListingDetails.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import $ from 'jquery';

import * as ListingActions from '../../actions/Listing';

import DetailMetadata from './components/DetailMetadata';
import DetailPrice from './components/DetailPrice';
import DetailDescription from './components/DetailDescription';
import HighlightFeatures from './components/HighlightFeatures';
import Facts from './components/Facts';
import Interiors from './components/Interiors';
import ValueEstimator from './components/ValueEstimator';
import RequestForm from './components/RequestForm';
import ScheduleForm from './components/ScheduleForm';
import MortgageRateCalculator from './components/MortgageRateCalculator';
import MortgageCalculator from './components/MortgageCalculator';
import NeighborhoodFacilities from './components/NeighborhoodFacilities';
import NearbyHomes from './components/NearbyHomes';
import Subscribe from './components/Subscribe';
import SupportCenter from './components/SupportCenter';

import headerImage from '../../assets/jpeg/01.jpg';

class DetailHeader extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <span>
              Ohio
               <img src={require("../../assets/svg/circle.svg")} alt="" style={{width:"5px",margin:"0 5px"}} />
              Ohio Country
               <img src={require("../../assets/svg/circle.svg")} alt="" style={{width:"5px",margin:"0 5px"}} />
              Ohio
               <img src={require("../../assets/svg/circle.svg")} alt="" style={{width:"5px",margin:"0 5px"}} />
              W Spring Str. Arena District</span>
          </div>
          <div className="col-sm-12 col-md-4">
            Comment Like Share
          </div>
        </div>

    )
  }
}

class FloatRight extends Component {
  // fixDiv() {
  //   var $cache = $('#sidenav');
  //   if ($(window).scrollTop() > 280 && $(window).scrollTop() < 3100)
  //     $cache.css({
  //       'position': 'fixed',
  //       'top': '10',
  //       'margin-left':'-20px',
  //       'opacity':'1',
  //       'margin-top':'60px'
  //     });
  //   else if ($(window).scrollTop() > 3099 && $(window).scrollTop() < 3500){
  //     $cache.css({
  //       'position': 'fixed',
  //       'top': '10',
  //       'margin-left':'-20px',
  //       'opacity':'0.5',
  //       'margin-top':'60px'
  //     });
  //   }
  //   else
  //     $cache.css({
  //         'position': 'relative',
  //         'top': '10',
  //         'top': 'auto',
  //         'margin-left':'-20px',
  //         'margin-top':'-100px'
  //     });
  // }
  componentDidMount() {
    function fixDiv() {
      var $cache = $('#sidenav');
      if ($(window).scrollTop() > 280 && $(window).scrollTop() < 3100)
        $cache.css({
          'position': 'fixed',
          'top': '10px',
          'margin-left':'-20px',
          'opacity':'1',
          'margin-top':'60px'
        });
      else if ($(window).scrollTop() > 3099 && $(window).scrollTop() < 3500){
        $cache.css({
          'position': 'fixed',
          'top': '10px',
          'margin-left':'-20px',
          'opacity':'0.5',
          'margin-top':'60px'
        });
      }
      else
        $cache.css({
            'position': 'relative',
            'top': '10px',
            'top': 'auto',
            'margin-left':'-20px',
            'margin-top':'-100px'
        });
    }
    $(window).scroll(fixDiv);
    fixDiv();
  }
  render(){
    return(
      <div className="col-sm-12 col-md-3 hidden-sm hidden-xs">
        <div id="sidenav">
          <RequestForm />
          <ScheduleForm />
        </div>
      </div>
    );
  }
}

class DetailBody extends Component {
  handleActive = () => {
    if (!this.props.listing._id==="") return false;
    else return true;
  }
  render() {
    if (!this.handleActive()) return (<div>loading...</div>);
    return (
      <div>
        <div id="section-01" className="section">
          <div className="row">
            <DetailMetadata
              key={this.props.listing._id}
              title={this.props.listing.name}
              meta={this.props.listing.meta}
              />
            <div className="hidden-md hidden-sm hidden-xs col-lg-1">
              .
            </div>
            <DetailPrice
              price={this.props.listing.price}
              />
          </div>
        </div>
        <DetailDescription />
        <HighlightFeatures
          features={this.props.listing.features}
          />
        <Facts
          facts={this.props.listing.facts}
          />
        <Interiors
          interiors={this.props.listing.interiors}
          construction={this.props.listing.construction}
          />
        <ValueEstimator />
        <MortgageRateCalculator />
        <MortgageCalculator
          price={this.props.listing.price}
          />
        <NeighborhoodFacilities />
      </div>
    )
  }
}

class ListingDetails extends Component {
  renderHeaderImages() {
    return (
      this.props.listing.headerImages.map((item,index) => {
        return (
          <img key={index} className="img-item" src={item.image} alt="" />
        )
      })
    );

  }
  renderCarousel(){
    return (
      <div id="img-carousel">
        <div className="overlay"></div>
        <div className="img-c-button">
          <div id="c-prev" className="push-left" style={{cursor:"pointer",height: "50px",width:"25px"}}>
            <img src={require("../../assets/svg/arr-left-black.svg")} alt="" width="20px;"style={{margin:"15px 2px"}} />
          </div>
          <div className="push-left text-center" style={{height:"50px",width:"100px"}}>
            <p id="c-img-text" style={{marginTop:"15px"}}>None</p>
          </div>
          <div id="c-next" className="push-left" style={{cursor:"pointer",height: "50px",width:"25px"}}>
            <img src={require("../../assets/svg/arr-right-black.svg")} alt="" width="20px;"style={{margin:"15px 2px"}} />
          </div>
        </div>
        <div className="img-container">
          {this.renderHeaderImages()}
          {this.renderHeaderImages()}
          {this.renderHeaderImages()}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(ListingActions.load());
    var caroTimer = setInterval(function(){caro(startIndex() + 1)}, 10000);
  $('#img-carousel .img-container .img-item').eq(0).addClass('c-img-active');
  caro(startIndex());
  /* methods */
  function startIndex(){var r = 0;$('.img-item').each(function( index ) {if($(this).is('.c-img-active')){r = index;}});return r;}
    function caro(start_arg){
      var items = $('#img-carousel .img-container .img-item');
      var max_index = items.length - 1;
      var start = start_arg;
      if(start > max_index) start = 0;
      else if(start < 0 ) start = max_index;

      $('#c-img-text').text(start + 1 + " / " + items.length);
      items.each(function(index){
        $(this).attr('class', 'img-item');
      });
      items.eq(start).addClass('c-img-active');

      if(start === 0){
        items.eq(max_index).addClass('c-item-left');
      }
      else{
        items.eq(start - 1).addClass('c-item-left');
      }
      if(start === max_index){
        items.eq(0).addClass('c-first-right');
        items.eq(1).addClass('c-second-right');
        items.eq(2).addClass('c-third-right');
      }
      else if (start === max_index - 1) {
        items.eq(start+1).addClass('c-first-right');
        items.eq(0).addClass('c-second-right');
        items.eq(1).addClass('c-third-right');
      }
      else if(start === max_index - 2){
        items.eq(start+1).addClass('c-first-right');
        items.eq(start+2).addClass('c-second-right');
        items.eq(0).addClass('c-third-right');
      }
      else{
        items.eq(start+1).addClass('c-first-right');
        items.eq(start+2).addClass('c-second-right');
        items.eq(start+3).addClass('c-third-right');
      }
    }
    /*events*/
    $('#c-prev').click(function(){caro(startIndex() - 1)});
    $('#c-next').click(function(){caro(startIndex() + 1)});
  }
  render() {
    return (
      <div>
        {this.renderCarousel()}
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <div style={{padding: "0 40px"}}>
              <DetailHeader />

              <hr className="no-pad hr-dig" />
              <DetailBody
                listing={this.props.listing}
                />
            </div>
          </div>
          <FloatRight />
        </div>
        <NearbyHomes
          homes={this.props.listing.nearbyHomes}
          />
        <Subscribe />
        <SupportCenter />
      </div>
    )
  }
}

export default connect(state => ({
  listing: state.Listing
}))(ListingDetails);
