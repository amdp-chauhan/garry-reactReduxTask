import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as UserActions from '../actions/User';

class Login extends Component {
  handleFBLogin(){
    const { dispatch } = this.props;
    if (window.hasOwnProperty('FB')) {
      window.FB.login(
        res => {
          // if (res.status === 'connected') {
          //   window.location.reload();
          //   return;
          // }
          if (res.status === 'connected') {
            dispatch(UserActions.fbLogin(res));
          }
        },
        {
          scope: 'public_profile,email',
          auth_type: 'rerequest',
        },
      );
    }
  }
  render(){
    return (
      <div id="login">
        <div id="loginModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="login-title">
                  <h1>Welcome Back</h1>
                  <p>Log in to save homes and get alerts about new listings.</p>
                </div>

                <form class="login-form">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email"
                      />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      />
                  </div>

                  <div class="row login-submit">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          class=""
                          type="checkbox"
                          />
                        <span>Remember me</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                    <button class="btn btn-white pull-right" type="submit">Sign In</button>

                    </div>
                  </div>
                </form>
                <div class="row links">
                  <div class="col-md-6" style={{borderRight: "1px solid gray"}}>
                    <a class="register-btn">Register now</a>
                  </div>
                  <div class="col-md-6">
                    <a class="forgot-btn">Forgot password?</a>
                  </div>
                </div>


                <div class="row well social-links">
                  <div class="btn-group btn-block">
                    <button
                      class="btn btn-primary"
                      onClick={() => this.handleFBLogin()}
                      >
                      Sign in with Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.User
}))(Login);
