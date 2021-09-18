import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resetState } from '../actions/shared'
const navItems = [{ name: 'Home Page', location: '/' },
{ name: 'New Question', location: '/add' },
{ name: 'LeaderBoard', location: '/leaderboard' }]

function Nav(props) {

    const { authedUser, dispatch } = props;

    const handleLogout = () => {
        dispatch(resetState())
    }

    if (!authedUser)
        return '';

    return (
        <nav className="nav nav-pills nav-fill navbar-expand-lg justify-content-center navbar-light border-2 shadow border-bottom border-primary bg-light pt-3 mb-3">
            <div className="navbar-nav">
                {navItems.map(e => (
                    <NavLink exact key={e.name} className="nav-item nav-link quesion-nav-item " activeClassName='active text-light' to={e.location}>{e.name}</NavLink>
                ))}
                <div className='user-name center-item'>
                    <h6 className='mb-0'>Hello, {authedUser.name}</h6>
                    <img src={authedUser.avatarURL} alt="" />
                </div>
                <button onClick = {handleLogout} className="ml-1 nav-item nav-link quesion-nav-item">Logout</button>
            </div>
        </nav>
    );
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser: authedUser ? users[authedUser] : null
    }
}

export default connect(mapStateToProps)(Nav);