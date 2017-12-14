import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

const Listing = require('./routes/ListingDetails/ListingDetails').default;
class Header extends Component {
  render(){
    return(
      <Nav />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        {this.props.children || <Listing />}
        <Footer />
      </div>
    );
  }
}

export default App;
