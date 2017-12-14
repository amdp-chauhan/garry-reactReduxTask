import React, { Component } from 'react';
import note from '../../../assets/svg/note.svg';
import envelope from '../../../assets/svg/envelope.svg';
import printer from '../../../assets/svg/printer.svg';

class DetailDescription extends Component {
  render() {
    return (
      <div id="section-02" className="section">
        <h5 className="sec-title violet-text">Property Description</h5>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="row">
              <span className="sec-content margin-bottom-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce...
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
