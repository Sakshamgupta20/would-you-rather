import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PollResponse from './PollResponse';
import PollSubmit from './PollSubmit';

function Poll(props) {
    const { question, author,selectedOption} = props;

    if (question === null) {
        return (
            <Redirect to='/notFound'></Redirect>
        );
    }

    return (
        <div className='container bg-floralwhite shadow border border-secondary p-0 rounded w-80'>
            <h5 className='p-2 bg-light-grey border-bottom border-secondary rounded-top'>
                {selectedOption ? `Added by ${author.name}`  :`${author.name} asks:`}
            </h5>
            <div className='container m-3'>
                <div className='row'>
                    <div className='col-md-5 border-right-grey text-center'>
                        <img className='img-thumbnail rounded-circle w-50' src={author.avatarURL} alt="avatar" />
                    </div>
                    <div className='col-md-7'>
                        {selectedOption == null 
                            ? <PollSubmit id = {question.id}></PollSubmit> 
                            : <PollResponse id = {question.id}></PollResponse>}
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionId } = props.match.params
    const question = questions[questionId]
    return question
        ? {
            question,
            author: users[question.author],
            authedUser,
            selectedOption: users[authedUser].answers[questionId]
        }
        : null
}


export default connect(mapStateToProps)(Poll);