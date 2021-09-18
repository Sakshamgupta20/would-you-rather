import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './Authentication/Login';
import HomePage from './HomePage'
import SignUp from './Authentication/SignUp'
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import history from './History'
import Poll from './Poll/Poll'
import NotFound from '../components/NotFound'
import NewQuestion from './Question/NewQuestion';
import Leadeboard from './LeaderBoard/Leaderboard';
import Nav from './Nav'

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Fragment>
          <LoadingBar />
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signUp' exact component={SignUp}></Route>
          <PrivateRoute path='/notFound' exact component={NotFound}></PrivateRoute>
          <Nav></Nav>
          <div className="container p-0">
            <div className="row">
              <div className='col-lg-3 col-md-0'></div>
              <div className='col-lg-6 col-md-12'>
                <PrivateRoute path='/' exact component={HomePage}></PrivateRoute>
                <PrivateRoute path='/questions/:questionId' exact component={Poll}></PrivateRoute>
                <PrivateRoute path='/newQuestion' exact component={NewQuestion}></PrivateRoute>
                <PrivateRoute path='/leaderboard' exact component={Leadeboard}></PrivateRoute>
              </div>
              <div className='col-lg-3 col-md-0'></div>
            </div>
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
