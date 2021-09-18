import React from 'react';
import { connect } from 'react-redux';
import LeaderboardUser from './LeaderboardUser';

function Leadeboard(props) {
    const {users} = props;
    return ( 
        <ul>
            {users.map( (user,index) => (
                <li key = {user}>
                    <LeaderboardUser position = {index + 1} userId = {user}></LeaderboardUser>
                </li>
            ))}
        </ul>
    );
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).sort((a, b) => (Object.keys( users[b].answers).length + users[b].questions.length) - (Object.keys( users[a].answers).length + users[a].questions.length))
    }
}
export default connect(mapStateToProps)(Leadeboard);