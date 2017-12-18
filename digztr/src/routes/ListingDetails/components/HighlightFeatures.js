import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../../config';
import Icons from '../../../components/Icons';
import axios from 'axios';

import * as ListingActions from '../../../actions/Listing';

class Feature extends Component {
  render(){
    return (
      <div className="col-sm-6 col-md-3 text-center house-feature">
        <a
          onClick={() => this.props.deleteFeature(this.props.feature)}
          >
          <img className="pull-right" src={require('../../../assets/svg/x-button.svg')} width="20" height="20" />
        </a>
        <img className="row " src={this.props.feature.icon.url} alt="" height="90" />
        <span className="row">{this.props.feature.name}: {this.props.feature.value}</span>
        <img src={require("../../../assets/svg/fire.svg")} alt="" width="30px" />
        <b className="orange-text">Hottest Size</b>
      </div>
    )
  }
}

class HighlightFeatures extends Component {
  state = {
    name: "",
    value: "",
    selectedIcon: {
      icon:"",
      url:""
    },
    submitState: "Add New Feature",
    disabledSubmitState: true
  }
  resetStates(){
    this.setState({
      name: "",
      value: "",
      selectedIcon: {
        icon:"",
        url:""
      }
    })
  }
  handleChangeName(e){
    this.setState({name: e.target.value});
  }
  handleChangeValue(e){
    this.setState({value: e.target.value})
  }
  handleApiRequest(data){
    axios.put(`${config.api.baseUrl}/api/listings/${this.props._id}/features`, data)
      .then(res => {
        console.log(res);
        this.setState({disabledSubmitState:true});
        this.setState({submitState:"Add New Feature"});
        this.props.dispatch(ListingActions.load());
        this.resetStates();
      })
      .catch(res => {
        console.log(res);
        this.setState({disabledSubmitState:false});
        this.setState({submitState:"Error! Please click to try again"});
      })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.disabledSubmitState) {
      this.setState({disabledSubmitState:false});
      this.setState({submitState:"Save New Feature"});
    }else{
      let data = [];

      this.props.features.map(item => {
        data.push({
          name: item.name,
          value: item.value,
          icon: item.icon._id
        });
      });

      data.push({
        name: this.state.name,
        value: this.state.value,
        icon: this.state.selectedIcon._id
      });

      // data = JSON.stringify(data);

      this.handleApiRequest(data);

      this.setState({disabledSubmitState:true});
      this.setState({submitState:"Saving!!"});



    }
  }
  handleDelete(feature){
    let data = [];
    this.props.features.map(item => {
      if (item.name !== feature.name) {
        data.push({
          name: item.name,
          value: item.value,
          icon: item.icon._id
        });
      }
    })
    this.handleApiRequest(data);
  }
  handleIconChange(item){
    this.setState({selectedIcon: item});
  }
  renderList() {
    return (
      this.props.features.map((item,index) => {
        return (
          <Feature
            key={index}
            feature={item}
            deleteFeature={(feature) => this.handleDelete(feature)}
            />
        )
      })
    );
  }
  renderModal(){
    return (
      <Icons
        handleSelect={(icon) => this.handleIconChange(icon)}
      />
    )
  }
  renderInputForms(){
    if (!this.state.disabledSubmitState) {
      return (
        <div>
          <div className="form-group">
            <label for="name" className="control-label">Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={e => this.handleChangeName(e)}
              />
          </div>
          <div className="form-group">
            <label for="value" className="control-label">Value: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.value}
              onChange={e => this.handleChangeValue(e)}
              />
          </div>
          <div className="form-group">
            <label for="icon" className="control-label">Icon: </label>
            <input type="text" className="form-control" data-toggle="modal" data-target="#iconModal" value={this.state.selectedIcon.icon} />
          </div>
        </div>
      )
    }else{
      return null;
    }
  }
  render(){
    return (
      <div id="section-03" className="section">
        <h5 className="sec-title violet-text">High Light Features</h5>
        <div className="row">
          {this.renderList()}
        </div>
        <br />
        <div className="row text-center" style={{margin: "0 20px"}}>
          <form
            className="form-inline"
            onSubmit={e => this.handleSubmit(e)}
            >
            {this.renderInputForms()}
            <input
              type="submit"
              class="btn btn-overwrite btn-block"
              value={this.state.submitState}
              />
          </form>
        </div>
        <br />
        <div className="row text-center feature-text">
          <p>This home has {this.props.features.length}/5 hottest features!  It will be sold fast</p>
        </div>
        {this.renderModal()}
      </div>
    )
  }
}


export default connect(state => ({
  listing: state.Listing
}))(HighlightFeatures);
