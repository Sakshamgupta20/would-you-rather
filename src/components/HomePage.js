import React from 'react';
import { connect } from 'react-redux';

function HomePage(props) {

    const { authedUser,dispatch } = props

    return (
        `Hello ${authedUser.name} Whats Up`
        );
}


function mapStateToProps({ authedUser, loadingBar }) {
    return {
        authedUser,
        loading: loadingBar.default === 1
    }
}
export default connect(mapStateToProps)(HomePage);