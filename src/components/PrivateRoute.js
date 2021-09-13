import React from 'react';
import { connect } from 'react-redux';

import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    const isLoggedIn = rest.authedUser !== null;

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute);