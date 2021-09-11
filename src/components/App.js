import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import HomePage from './HomePage'
import SignUp from './SignUp'
import { Router,Route } from 'react-router-dom';
import history from './History'

class App extends Component {

  render() {
    const { authedUser } = this.props;
    return (
      <Router history = {history}>
        <Fragment>
          <LoadingBar />
          <Route path='/' exact component={authedUser === null ? Login : HomePage }></Route>
          <Route path='/signUp' exact component={authedUser === null ? SignUp : HomePage }></Route>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser,loadingBar }) {
  return {
    authedUser,
    loading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps)(App);
