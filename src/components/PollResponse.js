import React from 'react';
import { connect } from 'react-redux';
import Option from './Option';

function PollResponse(props) {
    const {question,selectedOption} = props;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    return (  
    <div>
        <h5>Results:</h5>
        <Option 
            option = {question.optionOne} 
            selected = {selectedOption === 'optionOne'}
            totalVotes = {totalVotes}></Option>
        <Option 
            option = {question.optionTwo} 
            selected = {selectedOption === 'optionTwo'}
            totalVotes = {totalVotes}></Option>
    </div>
    );
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props;
    const question = questions[id]
    return {
        question,
        selectedOption: users[authedUser].answers[id]
    }
}


export default connect(mapStateToProps)(PollResponse);