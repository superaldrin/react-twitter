/**
 * @author Aldrin Lim
 * Main layout for the App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { autobind } from 'core-decorators';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';
@autobind
class MainLayout extends Component {
  componentWillReceiveProps(nextProps) {
  }
  logout(){
    browserHistory.push("/logout");
  }
  render() {
    return (
      <div>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="#">Twitter React</a>
          </div>
          { 
            Session.get("isLoggedIn") && 
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li>
                  
                  <a href="#"><img style={{borderRadius: 999, border: "solid 1px #aaa", marginRight: "10px"}}  width="40" src={Session.get("user").profile_image_url} />  {Session.get("user").name}</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li  onClick={this.logout} className="uk-active"><a href="#">Logut</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          }

        </nav>
        <div style={{ height: "100%" }} className="uk-container-expand uk-padding uk-height-large">
          <Card>{this.props.children}</Card>
        </div>
      </div>
    )
  }
}
/**
 * Redux State as Props
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    redux: state
  };
};
// export default connect(mapStateToProps)(MainLayout);

export default connect(mapStateToProps)(MainLayout)