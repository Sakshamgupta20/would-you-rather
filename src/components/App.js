import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import HomePage from './HomePage'
import SignUp from './SignUp'
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import history from './History'
import Poll from '../components/Poll'
import NotFound from '../components/NotFound'

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Fragment>
          <LoadingBar />
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signUp' exact component={SignUp}></Route>
          <PrivateRoute path='/notFound' exact component={NotFound}></PrivateRoute>
          <div className="container p-0 w-50">
            <PrivateRoute path='/' exact component={HomePage}></PrivateRoute>
            <PrivateRoute path='/questions/:questionId' exact component={Poll}></PrivateRoute>
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps)(App);
