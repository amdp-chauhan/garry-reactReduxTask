import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../config';
import { withCookies, Cookies } from 'react-cookie';

class CheckBox extends Component {
  state = {
    isChecked: false
  };

  handleCheck() {
    this.setState({isChecked: !this.state.isChecked});

    this.props.handleCheck(this.props.label);
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={() => this.props.handleCheck()}
          />
      </div>
    );
  }
}

class RequestForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: ""
  };
  componentWillMount() {
    const { cookies } = this.props;

    this.setState({
      name: cookies.get('request_name'),
      phone: cookies.get('request_phone'),
      email: cookies.get('request_email')
    })
  }
  componentDidMount(){
    this.props.agents.forEach(item => {
      item.checked = 0;
    });
  }
  clearFields(){
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  }
  handleSubmit(e){
    e.preventDefault();

    let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
      is_opened: false,
      agents: []
    }

    this.props.agents.forEach(item => {
      if (item.checked) data.agents.push(item._id)
    });

    axios.post(`${config.api.baseUrl}/api/inquiries`, data)
      .then(res => {
        this.clearFields();
      });
  }
  handleNameChange(e){
    const { cookies } = this.props;

    cookies.set('request_name', e.target.value, { path: '/' });
    this.setState({name: e.target.value});
  }
  handlePhoneChange(e){
    const { cookies } = this.props;

    cookies.set('request_phone', e.target.value, { path: '/' });
    this.setState({phone: e.target.value});
  }
  handleEmailChange(e){
    const { cookies } = this.props;

    cookies.set('request_email', e.target.value, { path: '/' });
    this.setState({email: e.target.value});
  }
  handleMessageChange(e){
    this.setState({message: e.target.value});
  }
  handleCheck(label){
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
  renderAgents(){
    return (
      this.props.agents.map((item,index) => {

        return (
          <div className="row">
            <div className="col-sm-2 profile-pic">
              <div className="img-container" >
                <img src={`${item.thumbnail}?height=50&width=50`} alt="" />
              </div>
            </div>
            <div className="col-sm-5">
              <p style={{marginBottom:"0px",fontSize:"12px"}}>{item.firstName} {item.lastName}</p>
              <p style={{marginBottom:"0px",fontSize:"12px"}}>Listing Agent</p>
            </div>
            <div className="col-sm-5 call no-pad">
              <img src={require("../../../assets/svg/call.svg")} alt="" width="10px" style={{marginRight:"10px"}} />
              <span className="orange-text">{item.contact.phone}</span>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {item.checked=!item.checked}}
                />
            </div>
          </div>
        )
      })
    );

  }
  render(){

    return(
      <div className="card">
            <div className="card-title text-center violet-03-bg">
              <h5>REQUEST INFORMATION</h5>
            </div>
            <div className="card-content">
              {this.renderAgents()}

              <h6 className="violet-text">Your Contact Information</h6>
              <form
                className="forms"
                onSubmit={e => this.handleSubmit(e)}
                >
                <input
                  type="text"
                  value={this.state.name}
                  className="form-control"
                  placeholder="Fullname"
                  onChange={e => this.handleNameChange(e)}
                  />
                <input
                  type="text"
                  value={this.state.phone}
                  className="form-control"
                  placeholder="Phone"
                  onChange={e => this.handlePhoneChange(e)}
                  />
                  <input
                    type="text"
                    value={this.state.email}
                    className="form-control"
                    placeholder="Email"
                    onChange={e => this.handleEmailChange(e)}
                    />
                <textarea
                  className="form-control"
                  rows="3"
                  cols="80"
                  placeholder="Your Message"
                  onChange={e => this.handleMessageChange(e)}
                  >
                  {this.state.message}
                </textarea>
                <input
                type="submit"
                className="btn-overwrite"
                style={{position: "absolute", marginLeft:"80px",width:"120px",padding: "5px 20px"}}
                value="Submit"
                />
              </form>

            </div>
          </div>
    );
  }
}
export default withCookies(RequestForm);
