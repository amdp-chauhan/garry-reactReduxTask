import React,{Component} from 'react';

export default class SortBy extends Component {

    render() {
        return (
          <div id="section-list-01">
            <div className="content">
              <div className="row">

                <div className="col-xs-12 col-sm-6 col-md-4">

                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 violet-text">
					<select className="sortby" name="">
						<option value="">Sort by:</option>
					</select>
				</div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <center>
                  	<button className="viewType">Map</button>
                   	<button className="viewType btn btn-overwrite">List</button>
                   </center>
                </div>
            </div>
            </div>
          </div>
        );
    }
}
