import React,{Component} from 'react';
import GoogleMapsLoader from 'google-maps';

export default class NeighborhoodFacilities extends Component {
  componentDidMount() {
    GoogleMapsLoader.KEY = 'AIzaSyB9oxm8mSzbrjp16Nd343Pr467AcGZWDgU';
    GoogleMapsLoader.load(function(google) {
      new google.maps.Map(document.getElementById('map'), {
        center: {lat: 13.6236789, lng: 123.1918884},
        zoom: 15,
        fullscreenControl: false,
        zoomControl: false,streetViewControl: false,
      });
    });
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
                    <a href="#1">
                      <div className="col-xs-12 nf-item nf-active text-center" style={{height:"70px"}}>
                        <img src={require("../../../assets/svg/graduate-hat.svg")} alt="" />
                      </div>
                    </a>
                    <a href="#2">
                      <div className="col-xs-12 nf-item text-center"style={{height:"70px"}}>
                        <img src={require("../../../assets/svg/hat.svg")} alt="" />
                      </div>
                    </a>
                    <a href="#3">
                      <div className="col-xs-12 nf-item text-center" style={{height:"70px"}}>
                        <img src={require("../../../assets/svg/empty-shopping-cart.svg")} alt="" />
                      </div>
                    </a>
                    <a href="#4">
                      <div className="col-xs-12 nf-item text-center" style={{height:"70px"}}>
                        <img src={require("../../../assets/svg/pills.svg")} alt="" />
                      </div>
                    </a>
                    <a href="#5">
                      <div className="col-xs-12 nf-item text-center" style={{height:"70px"}}>
                        <img src={require("../../../assets/svg/gas-station.svg")} alt="" />
                      </div>
                    </a>
                    <a href="#6">
                      <div className="col-xs-12 nf-item text-center" style={{height:"70px"}}>
                        <img src={require("../../../assets/svg/hot-chocolate-cup.svg")} alt="" />
                      </div>
                    </a>
                    <a href="#6">
                      <div className="col-xs-12 nf-item text-center" style={{height:"70px"}}>
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
