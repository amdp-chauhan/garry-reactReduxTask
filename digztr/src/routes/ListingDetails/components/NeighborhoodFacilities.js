import React,{Component} from 'react';
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = 'AIzaSyB9oxm8mSzbrjp16Nd343Pr467AcGZWDgU';
GoogleMapsLoader.LIBRARIES = ['places'];

var markers = [];

export default class NeighborhoodFacilities extends Component {
  state = {
    active: "school"
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.geo.lat && this.props.geo.lng) {
      let geo = this.props.geo;

      GoogleMapsLoader.load(function(google) {

        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: geo.lat, lng: geo.lng},
          zoom: 15,
          fullscreenControl: false,
          zoomControl: false,streetViewControl: false,
        });

        let center = new google.maps.LatLng(geo.lat,geo.lng);

        let request = {
          location: center,
          radius: 5000,
          type: 'school'
        };

        let service = new google.maps.places.PlacesService(map);
        service.textSearch(request, (result, status) => {
          result.forEach(place => {
            let marker = new google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name
            });
            markers.push(marker);
          });
        });
      });
    }
  }
  renderSchoolMarkers() {
    this.deleteMarkers();
    let geo = this.props.geo;

    GoogleMapsLoader.load(function(google) {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: geo.lat, lng: geo.lng},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });

      let center = new google.maps.LatLng(geo.lat,geo.lng);

      let request = {
        location: center,
        radius: 5000,
        type: 'school'
      };

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        result.forEach(place => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          markers.push(marker);
        });
      });
    });
    this.setState({active:"school"});
  }
  renderRestaurantMarkers() {
    this.deleteMarkers();
    let geo = this.props.geo;

    GoogleMapsLoader.load(function(google) {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: geo.lat, lng: geo.lng},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });

      let center = new google.maps.LatLng(geo.lat,geo.lng);

      let request = {
        location: center,
        radius: 5000,
        type: 'restaurant'
      };

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        result.forEach(place => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          markers.push(marker);
        });
      });
    });
    this.setState({active:"restaurant"});
  }
  renderMarketMarkers(){
    this.deleteMarkers();

    let geo = this.props.geo;

    GoogleMapsLoader.load(function(google) {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: geo.lat, lng: geo.lng},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });

      let center = new google.maps.LatLng(geo.lat,geo.lng);

      let request = {
        location: center,
        radius: 5000,
        type: 'grocery_or_supermarket'
      };

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        result.forEach(place => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          markers.push(marker);
        });
      });
    });
    this.setState({active:"market"});
  }
  renderHospitalMarkers() {
    this.deleteMarkers();
    let geo = this.props.geo;

    GoogleMapsLoader.load(function(google) {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: geo.lat, lng: geo.lng},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });

      let center = new google.maps.LatLng(geo.lat,geo.lng);

      let request = {
        location: center,
        radius: 5000,
        type: 'hospital'
      };

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        result.forEach(place => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          markers.push(marker);
        });
      });
    });
    this.setState({active:"hospital"});
  }
  renderGasStationMarkers() {
    this.deleteMarkers();
    let geo = this.props.geo;

    GoogleMapsLoader.load(function(google) {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: geo.lat, lng: geo.lng},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });

      let center = new google.maps.LatLng(geo.lat,geo.lng);

      let request = {
        location: center,
        radius: 5000,
        type: 'gas_station'
      };

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        result.forEach(place => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          markers.push(marker);
        });
      });
    });
    this.setState({active:"gas_station"});
  }
  renderBakeryMarkers() {
    this.deleteMarkers();
    let geo = this.props.geo;

    GoogleMapsLoader.load(function(google) {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: geo.lat, lng: geo.lng},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });

      let center = new google.maps.LatLng(geo.lat,geo.lng);

      let request = {
        location: center,
        radius: 5000,
        type: 'bakery'
      };

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        result.forEach(place => {
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          markers.push(marker);
        });
      });
    });
    this.setState({active:"bakery"});
  }
  deleteMarkers(){
    //Loop through all the markers and remove
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
  render() {
    return (
      <div id="section-10" className="section">
        <h5 className="sec-title violet-text">Neighborhood Facilities</h5>
          <div className="card-shadow hidden-sm hidden-xs" style={{height:"420px", width:"200px", position: "absolute",zIndex:"1"}}>
            <div className="row no-margin">
              <div className="col-xs-7 no-pad violet-03-bg" style={{height:"420px"}}>
                <h5 className="rotate-90" style={{width: "370px", marginLeft: "-125px", marginTop: "120px"}}>Neighborhood Facilities</h5>
              </div>
              <div className="col-xs-5 no-pad white-bg" style={{height:"420px", overflow:"hidden"}}>
              <div className="row no-margin nf-option">
                <a onClick={() => this.renderSchoolMarkers()}>
                  <div className={`col-xs-12 nf-item text-center ${this.state.active==="school"?'nf-active':''}`} style={{height:"70px"}}>
                    <img src={require("../../../assets/svg/graduate-hat.svg")} alt="" />
                  </div>
                </a>
                <a onClick={() => this.renderRestaurantMarkers()}>
                  <div className={`col-xs-12 nf-item text-center ${this.state.active==="restaurant"?'nf-active':''}`} style={{height:"70px"}}>
                    <img src={require("../../../assets/svg/hat.svg")} alt="" />
                  </div>
                </a>
                <a onClick={() => this.renderMarketMarkers()}>
                  <div className={`col-xs-12 nf-item text-center ${this.state.active==="market"?'nf-active':''}`}  style={{height:"70px"}}>
                    <img src={require("../../../assets/svg/empty-shopping-cart.svg")} alt="" />
                  </div>
                </a>
                <a onClick={() => this.renderHospitalMarkers()}>
                  <div className={`col-xs-12 nf-item text-center ${this.state.active==="hospital"?'nf-active':''}`}  style={{height:"70px"}}>
                    <img src={require("../../../assets/svg/pills.svg")} alt="" />
                  </div>
                </a>
                <a onClick={() => this.renderGasStationMarkers()}>
                  <div className={`col-xs-12 nf-item text-center ${this.state.active==="gas_station"?'nf-active':''}`}  style={{height:"70px"}}>
                    <img src={require("../../../assets/svg/gas-station.svg")} alt="" />
                  </div>
                </a>
                <a onClick={() => this.renderBakeryMarkers()}>
                  <div className={`col-xs-12 nf-item text-center ${this.state.active==="bakery"?'nf-active':''}`}  style={{height:"70px"}}>
                    <img src={require("../../../assets/svg/hot-chocolate-cup.svg")} alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-shadow hidden-md hidden-lg">
          <div className="violet-03-bg white-text text-center text-uppercase" style={{padding: "20px",fontSize: "15px"}}>
            Neighborhood Facilities
          </div>
          <div className="white-bg text-center text-uppercase">
            <div className="row" style={{margin: "0"}}>
              <a href="#1">
                <div className="col-xs-4 col-sm-2 nf-item-2 nf-active text-center">
                  <img src={require("../../../assets/svg/graduate-hat.svg")} alt=""/>
                </div>
              </a>
              <a href="#2">
                <div className="col-xs-4 col-sm-2 nf-item-2 text-center">
                  <img src={require("../../../assets/svg/hat.svg")} alt=""/>
                </div>
              </a>
              <a href="#3">
                <div className="col-xs-4 col-sm-2 nf-item-2 text-center">
                  <img src={require("../../../assets/svg/empty-shopping-cart.svg")} alt=""/>
                </div>
              </a>
              <a href="#4">
                <div className="col-xs-4 col-sm-2 nf-item-2 text-center">
                  <img src={require("../../../assets/svg/pills.svg")} alt=""/>
                </div>
              </a>
              <a href="#5">
                <div className="col-xs-4 col-sm-2 nf-item-2 text-center">
                  <img src={require("../../../assets/svg/gas-station.svg")} alt=""/>
                </div>
              </a>
              <a href="#6">
                <div className="col-xs-4 col-sm-2 nf-item-2 text-center">
                  <img src={require("../../../assets/svg/hot-chocolate-cup.svg")} alt=""/>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="map" style={{height: "420px"}}>
        </div>
      </div>
    );
  }
}
