import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import note from '../../../assets/svg/note.svg';
import envelope from '../../../assets/svg/envelope.svg';
import printer from '../../../assets/svg/printer.svg';

GoogleMapsLoader.KEY = 'AIzaSyB9oxm8mSzbrjp16Nd343Pr467AcGZWDgU';
GoogleMapsLoader.LIBRARIES = ['places'];

class DetailDescription extends Component {
  componentDidUpdate(){
      if (this.props.geo.lat && this.props.geo.lng) {
        let geo = this.props.geo;
        GoogleMapsLoader.load(function(google) {
          let smallmap = new google.maps.Map(document.getElementById('smallmap'), {
            center: {lat: geo.lat, lng: geo.lng},
            zoom: 15,
            fullscreenControl: false,
            zoomControl: false,streetViewControl: false,
          });

          let center = new google.maps.LatLng(geo.lat,geo.lng);

          let marker = new google.maps.Marker({
            position: center,
            map: smallmap,
            title: ""
          });
        });
      }
    }
  render() {
    return (
      <div id="section-02" className="section">
        <h5 className="sec-title violet-text">Property Description</h5>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="row">
              <span className="sec-content margin-bottom-20">
                {this.props.description}
              </span> <a href="#" className="sec-content orange-text">Show more +</a>
            </div>

            <div className="row btn-group note-option" style={{marginBottom: "30px"}}>
              <button type="button" className="btn btn-default"><img className="btn-img" src={note} alt="" width="17" />Add Note</button>
              <button type="button" className="btn btn-default"><img className="btn-img" src={envelope} alt="" width="26" />Email</button>
              <button type="button" className="btn btn-default"><img className="btn-img" src={printer} alt="" width="21" />Print</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="map">
              <div id="smallmap" style={{height:"100%"}}>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailDescription;
