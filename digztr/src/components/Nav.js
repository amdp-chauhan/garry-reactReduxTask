import React,{Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
          <div>
          <nav className="digztr-nav navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="row">
                <a href="#">
                  <div className="col-xs-12 col-md-2  text-center" style={{borderRight:"1px solid lightgray"}}>
                    <h1 style={{marginTop:"10px"}}> <span className="violet-text">DIG</span><span className="blue-text">ztr</span> </h1>
                  </div>
                </a>
                <button type="button" style={{marginTop:"-47px"}} className="navbar-toggle visible-xs visible-sm visible-md hidden-lg" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="#">
                  <div className="hidden-xs hidden-sm col-md-1 text-center"  style={{borderRight:"1px solid lightgray", height:"60px"}}>
                    <h5 style={{marginTop:"20px",fontSize:"14px"}} className="violet-text">  <img src={require("../assets/svg/menu.svg")} alt="" width="15" /> MENU</h5>
                  </div>
                </a>
                <a href="index.html" className="active-link">
                  <div className="hidden-xs hidden-sm col-md-1 text-center no-pad">
                    <h5 style={{margin:"10px 0",padding: "13px 0 12px 0",fontSize:"14px",borderRight:"1px solid lightgray"}} className="violet-text">BUY HOME <img src={require("../assets/svg/down-arrow.svg")} alt="" width="12" /></h5>
                  </div>
                  <div className="hidden-xs hidden-sm col-md-3" style={{paddingRight:"0"}}>
                    <h5 style={{padding:"23px 0 22px 0",fontSize:"14px",float:"left"}}>Arena District, OH|</h5>
                      <div className="search-btn" style={{float:"right"}}>
                        <img src={require("../assets/svg/loupe.svg")} alt="" />
                      </div>
                  </div>
                </a>
                <a href="advancefilter.page.html">
                  <div className="hidden-xs hidden-sm col-md-1 text-center no-pad ">
                    <h5 style={{padding:"23px 0",fontSize:"14px"}} className="violet-03-bg">FILTER <img src={require("../assets/svg/down-arrow-white.svg")} alt="" width="12" /></h5>
                  </div>
                </a>
                <a href="#">
                  <div className="hidden-xs hidden-sm col-md-2 text-center">
                    <h5  style={{marginTop:"18px",fontSize:"14px",color:"#555"}}><img src={require("../assets/svg/log-in.svg")} alt="" /> Login/Sign up</h5>
                  </div>
                </a>
                <a href="#">
                  <div className="hidden-xs hidden-sm col-md-2 text-center">
                    <h5 style={{marginTop:"22px",fontSize:"10px",color:"#555"}}><img src={require("../assets/svg/heart.svg")} alt="" /> (0)</h5>
                  </div>
                </a>
              </div>
            </div>
          </nav>

          <div id="myNavbar" className="collapse hidden-md hidden-lg nav-m row" style={{marginLeft:"0"}}>
            <ul className="nav navbar-nav row col-sm-12" style={{marginLeft:"5px"}}>
              <li className="col-sm-12">
                <a href="#">
                  <h5 style={{fontSize:"14px"}} className="violet-text">
                    <img src={require("../assets/svg/menu.svg")} alt="" width="15" /> MENU
                  </h5>
                </a>
              </li>
              <li className="col-sm-12">
                <a href="#">
                  <h5 className="violet-text" style={{fontSize:"14px"}} >BUY HOME | Arena District, OH|</h5>
                </a>
              </li>
              <li className="col-sm-12">
                <a href="#" className="violet-03-bg">
                  <h5 className="white-text" style={{fontSize:"14px"}} >FILTER</h5>
                </a>
              </li>
              <li className="col-sm-12">
                <a href="#">
                  <h5 style={{fontSize:"14px", color:"#555"}}>
                    <img src={require("../assets/svg/log-in.svg")} alt="" /> Login/Sign up
                  </h5>
                </a>
              </li>
              <li className="col-sm-12">
                <a href="#">
                  <h5 style={{fontSize:"14px", color:"#555"}}>
                    <img src={require("../assets/svg/heart.svg")} alt="" /> (0)
                  </h5>
                </a>
              </li>
            </ul>
          </div>
          </div>
        );
    }
}
