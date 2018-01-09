import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

const Listing = require('./routes/ListingDetails/ListingDetails').default;
const ListingList = require('./routes/ListingList/ListingList').default;
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
        {this.props.children || <ListingList />}
        <Footer />
      </div>
    );
  }
}

export default App;
