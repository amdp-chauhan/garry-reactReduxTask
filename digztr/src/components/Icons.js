import React,{Component} from 'react';
import { connect } from 'react-redux';

import * as IconActions from '../actions/Icon';

class Icons extends Component {
    handleChange(event){
      console.log("dsafsdf");
    }
    renderIcons(){
      return (
        this.props.icons.map((item,index) => {
          return (
            <div className="col-sm-3 text-center" key={index} style={{padding: "20px 0"}}>
              <a onClick={() => this.props.handleSelect(item)} data-dismiss="modal"><img src={item.url} width="30" height="30" /> <span>{item.icon}</span></a>
            </div>
          )
        })
      );
    }
    componentDidMount() {
      this.props.dispatch(IconActions.load());
    }
    render() {
        return (
          <div id="iconModal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">ICONS</h4>
                </div>
                <div class="modal-body">
                  <div className="row">
                    {this.renderIcons()}
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>
        );
    }
}

export default connect(state => ({
  icons: state.Icon
}))(Icons)
