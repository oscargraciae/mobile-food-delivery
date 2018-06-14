import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import Login from '../pages/Login';
import LoginNav from './Login';
import AppNavigator from './App';

class AuthNavigation extends Component {
  render() {
    const { authentication } = this.props;
    if (authentication.isLogged) {
      axios.defaults.headers.common["Authorization"] = `JWT ${authentication.token}`;
      return <AppNavigator />;
    }

    return <LoginNav />;
  }
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication,
  }
}

export default connect(mapStateToProps)(AuthNavigation);
