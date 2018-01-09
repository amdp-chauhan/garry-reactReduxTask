import React, { Component } from 'react';

class HomeItem extends Component{
	renderMeta() {
    return (
      this.props.home.meta.map((item,index) => {
        {console.log(item)}
        return (

          <div className="col-xs-4" key={index}>
            <img src={require(`../../../assets/svg/${item.image}`)} alt=""  width="20px" /><b> {item.value}</b>
          </div>
        );
      })
    )
  }
	render(){
	return(

		  	<div className="card">
				<div className="row">
					<div className="col-sm-12 col-md-5 col-lg-5">
					  	  <div className="card-img-container">
				            <img src={require("../../../assets/jpeg/01.jpg")} alt="" />
				          </div>
					</div>

					<div className="col-sm-12 col-md-7 col-lg-7">
						<div className="row">
						  	<div className="col-md-8 violet-text">
						  		<strong><h5>{this.props.home.name}</h5></strong>
						  		<small><img src={require("../../../assets/svg/active-pin.svg")} alt=""  width="20px" /> <span style={{marginLeft: "10px"}} className="orange-text">{this.props.home.address}</span></small>
						  	</div>
						  	<div className="col-md-4">
						  		<center>
							  		<h5 className="orange-text">${this.props.home.price}</h5>
							  		<small><p>For Sale</p></small>
						  		</center>
						  	</div>
					  	</div>

					  	<div className="row">
					  		<center>
						  		{this.renderMeta()}
						  	</center>
					  	</div>

					  	<div className="row">
					  		<div className="col-md-2">
					  			<img src="https://image.flaticon.com/icons/png/512/147/147140.png" className="icon" alt="" />
						  	</div>
						  	<div className="col-md-5">
					  			<h6>List by : Jonhy Doe</h6>
						  		<h6>(222) - 123 - 456</h6>
						  	</div>
						  	<div className="col-md-4">
						  		 <a href={`/listings/${this.props.home._id}`} className="btn btn-block btn-overwrite aa">READ MORE</a>
						  	</div>
					  	</div>
					</div>
				</div>
			</div>

		);
	}
}


export default class HomeListItem extends Component{
	renderList(){
      return (
        this.props.homes.map((item,index) => {
          return (
            <HomeItem
              key={index}
              home={item}
              />
          )
        })
      );
    }
	render() {
		console.log(this.props);
		return (
		<div id="section-list-02">
		  		{this.renderList()}
		</div>


		);
	}
}
