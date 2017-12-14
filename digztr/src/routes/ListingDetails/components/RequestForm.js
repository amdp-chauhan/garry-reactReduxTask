import React, { Component } from 'react';

class RequestForm extends Component {
  render(){
    return(
      <div className="card">
            <div className="card-title text-center violet-03-bg">
              <h5>REQUEST INFORMATION</h5>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col-sm-2 profile-pic ">
                  <div className="img-container" >
                    <img src={require("../../../assets/jpeg/01.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <p style={{marginBottom:"0px",fontSize:"12px"}}>Michael Doughlas</p>
                  <p style={{marginBottom:"0px",fontSize:"12px"}}>Listing Agent</p>
                </div>
                <div className="col-sm-5 call no-pad">
                  <img src={require("../../../assets/svg/call.svg")} alt="" width="10px" style={{marginRight:"10px"}} />
                  <span className="orange-text">732-676-6588</span>
                  <input type="checkbox" name="" value="" />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 profile-pic ">
                  <div className="img-container" >
                    <img src={require("../../../assets/jpeg/01.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <p style={{marginBottom:"0px",fontSize:"12px"}}>Julien Mulier</p>
                  <p style={{marginBottom:"0px",fontSize:"12px"}}>Preferred</p>
                </div>
                <div className="col-sm-5 call no-pad">
                  <img src={require("../../../assets/svg/call.svg")} alt="" width="10px"style={{marginRight:"10px"}} />
                  <span className="orange-text">732-676-6588</span>
                  <input type="checkbox" name="" value="" />
                </div>
              </div>

              <h6 className="violet-text">Your Contact Information</h6>
              <form className="forms" action="#" method="">
                <input type="text" name="" value="" className="form-control" placeholder="Fullname" />
                <input type="text" name="" value="" className="form-control" placeholder="Phone" />
                <input type="text" name="" value="" className="form-control" placeholder="Email" />
                <textarea name="name"  className="form-control" rows="3" cols="80" placeholder="Your Message"></textarea>
              </form>
              <button type="button" name="button" className="btn-overwrite" style={{position: "absolute", marginLeft:"80px",width:"120px",padding: "5px 20px"}}>Submit</button>
            </div>
          </div>
    );
  }
}

export default RequestForm;
