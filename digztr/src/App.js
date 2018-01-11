import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login';

const ListingList = require('./routes/ListingList/ListingList').default;


class Header extends Component {
  render(){
    return(
      <Nav
        user={this.props.user}
        />
    );
  }
}

class App extends Component {
  componentDidUpdate(){
    console.log(this.props.user);
    if (window.FB.hasOwnProperty('FB')) {
      window.FB.getLoginState(res => {
        console.log(res);
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div id="root">
        <Header
          user={this.props.user}
          />
        <div>
        <Login />
        {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(state => ({
  user: state.User
}))(App);
